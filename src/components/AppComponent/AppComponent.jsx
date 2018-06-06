import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../App.css';
import SearchField from '../SearchField'
import ResultSearch from '../ResultSearch'

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
          <SearchField
            value={this.state.query}
            onChange={this.handleChange('query')}
            onClick={this.onClick}
          />
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchActions: bindActionCreators(searchActions, dispatch),
  }
}

//export default AppComponent;
export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
