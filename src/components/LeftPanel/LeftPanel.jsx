import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import { withStyles } from '@material-ui/core/styles';

import '../../App.css';
import group from '../example.json'

const styles = theme => ({
  root: {
    minWidth: '50%',
    margin: 'auto',
    alignText: 'center'
  },
  list: {
    minWidth: '20%',
    paddingTop:'5%'
  },
  resultStatus: {
    color:'#3f51b5'
  }
});

class LeftPanel extends Component {
  static propTypes = {
    array: PropTypes.arrayOf(PropTypes.any),
    onClickLeftPanel: PropTypes.func,
  };

  static defaultProps = {
    array: undefined,
    onClickLeftPanel: undefined,
  };

  constructor(props) {
    super(props);
    this.prepareContent = this.prepareContent.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  prepareContent = () => {
    const Content = group.group.map((item) => {

      if (item !== null) {
        return <ListItem key={item.aliasName} button onClick={this.onClick}>
          <div id={item.aliasName}>
            {item.id}
          </div>
        </ListItem>
      }

    });
    return Content
  }

  onClick=event=>{
    const {onClickLeftPanel}=this.props;
    console.log('onClickLeftPanel',event.target.id)
    onClickLeftPanel(event.target.id)
  }


  render() {
    const { classes } = this.props;
    console.log('group', group);
    return (
      <List className={classes.list}>
        <ListItem key='resultStats' button onClick={this.onClick}>
          <div className={classes.resultStatus} id='all'>Все результаты</div>
        </ListItem>
        {this.prepareContent()}
      </List>
    )
  }
};
export default withStyles(styles)(LeftPanel);