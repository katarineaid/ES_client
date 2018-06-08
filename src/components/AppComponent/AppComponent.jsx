import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../App.css';
import SearchField from '../SearchField';
import Suggestion from '../Suggestion';
import ResultSearch from '../ResultSearch';
import * as searchActions from '../../shared/actions/index.js';

import logo from '../../logo.png';

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { query: 'сеть' };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClickSuggestion = this.onClickSuggestion.bind(this);
  }


  handleChange = name => event => {
    let value = event.target.value;
    const { searchActions } = this.props;
    searchActions.giveQuery(value);
    if (value.length % 3 === 0) {
      searchActions.getCache(value);
    }
  };

  onClickSuggestion = (value) => {
    const { searchActions } = this.props;
    searchActions.giveQuery(value);
    searchActions.getSearch(value);
    searchActions.getCache('');
  }

  onClick = () => {
    const { searchActions, query } = this.props;
    searchActions.getSearch(query);
    console.log('press button', query)
  }


  render() {
    const { result, cache, query } = this.props;
    console.log('result', result)
    console.log('cache', cache)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <SearchField
          value={query}
          onChange={this.handleChange('query')}
          onClick={this.onClick}
        />
        <Suggestion cache={cache} onClick={this.onClickSuggestion}/>
        <ResultSearch array={result}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    result: state.search.result,
    status: state.search.status,
    statusText: state.search.statusText,
    cache: state.search.cache,
    query: state.search.query,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchActions: bindActionCreators(searchActions, dispatch),
  }
}

//export default AppComponent;
export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
