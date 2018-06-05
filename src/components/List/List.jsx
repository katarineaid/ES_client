//List

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../App.css';

import Card from '../Card'


class List extends Component {
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
    const { array } = this.props;
    if (array.length >0){
      const Content = array.map((item)=>{
        return <Card item={item}/>
      });
      return Content
    }
    return null
  };

  render() {
    return this.prepareContent();
  }
}

export default List;