//Suggestion
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import Paper from '@material-ui/core/Paper'

import '../../App.css';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 907,
    position: 'absolute',
    zIndex: 1,
    margin: 0,
    left: '20%',
    right: 0,
    marginTop:'4%'
  },
  list: {
    padding: 2
  },
  item: {
    padding: 2,
    paddingLeft: 10
  }
});


class Suggestion extends Component {
  static propTypes = {
    cache: PropTypes.arrayOf(PropTypes.any),
  };

  static defaultProps = {
    cache: {},
  };

  constructor(props) {
    super(props);
    this.prepareContent = this.prepareContent.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick = query => event => {
    const { onClick } = this.props;
    console.log('123123', query);
    onClick(query)
  }

  prepareContent = () => {
    const { cache, classes } = this.props;
    if (cache.length > 0) {
      let listSuggestion = [];
      for (let i = 0; i < cache.length; i++) {
        listSuggestion.push(
          <ListItem button key={i} className={classes.item} onClick={this.onClick(cache[i].request)}>
            <ListItemText primary={cache[i].request}/>
          </ListItem>)

      }
      return <List className={classes.list}>{listSuggestion}</List>
    }
    return undefined
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={2}>
        {this.prepareContent()}
      </Paper>



    );
  }
}

export default withStyles(styles)(Suggestion);
