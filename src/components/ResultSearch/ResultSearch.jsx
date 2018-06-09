//List

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import { withStyles } from '@material-ui/core/styles';

import '../../App.css';
import InfoCard from "../InfoCard";

//import Card from '../Card'

const styles = theme => ({
  root: {
    minWidth: '50%',
    alignText: 'center'
  },
  list: {
    minWidth: '100%',
  },
  resultStatus:{
    minWidth: '100%',
    alignText: 'center',
    fontSize: 'small',
    fontFamily: 'arial,sans-serif',
    color: '#808080'
  }
});

class ResultSearch extends Component {
  static propTypes = {
    array: PropTypes.arrayOf(PropTypes.any),
  };

  static defaultProps = {
    array: undefined,
  };

  constructor(props) {
    super(props);
    this.prepareContent = this.prepareContent.bind(this);
  }

  prepareContent = () => {
    const { array, classes } = this.props;
    if (!array) {
      return null
    } else {
      if (array.length > 0) {
        const Content = array.map((item) => {

          if (item !== null) {
            return <ListItem key={item.OBJECTID.text}><InfoCard item={item}/></ListItem>
          }

        });
        return Content
      } else {
        return <ListItem key={Date.now()}>
          <div className={classes.root}>По вашему запросу ничего не найдено</div>
        </ListItem>
      }
    }

  };

  render() {
    const { array, classes } = this.props;
    let resultStats;
    if (!array) {
      resultStats = null
    } else {
      resultStats = "Результатов: "+ array.length
    }
    return (

      <List className={classes.list}>
        <ListItem key='resultStats'>
          <div className={classes.resultStatus}>{resultStats}</div>
        </ListItem>
        {this.prepareContent()}
      </List>


    )
  }

}

export default withStyles(styles)(ResultSearch);