//SearchField

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import '../../App.css';
import TextField from '@material-ui/core/TextField';
//import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  root: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
  },
  searchField: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchButton:{
    paddingTop: '24px',
  }
});

class SearchField extends Component {

  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    value: undefined,
    onChange: undefined,
    onClick: undefined,
  };

  constructor(props) {
    super(props);
  }


  render() {
    const { value, onChange, onClick, classes } = this.props;

    return (
      <div className={classes.searchField}>
        <TextField
          id="query"
          label="Поиск"
          value={value}
          onChange={onChange}
          margin="normal"
          className={classes.root}
          fullWidth={true}
        />
        <IconButton className={classes.searchButton} onClick={onClick}>
          <SearchIcon/>
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(SearchField);


