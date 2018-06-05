import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../App.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import List from '../List'

import * as searchActions from '../../shared/actions/index.js';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { query: 'сеть' };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    console.log('query', event.target.value)
  };

  onClick = () => {
    console.log('press button', this.state.query)
    const { searchActions } = this.props;
    searchActions.getSearch(this.state.query);
  }


  render() {
    const { result } = this.props;
    console.log('result', result)

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <TextField
          className="search-field"
          id="query"
          label="Поиск"
          value={this.state.query}
          onChange={this.handleChange('query')}
          margin="normal"
          fullWidth={true}
        />
        <IconButton onClick={this.onClick}>
          <SearchIcon/>
        </IconButton>
        <List array={result}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.search.result,
    status: state.search.status,
    statusText: state.search.statusText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchActions: bindActionCreators(searchActions, dispatch),
  }
}

//export default AppComponent;
export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
