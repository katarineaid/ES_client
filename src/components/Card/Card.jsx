import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../App.css';




class Card extends Component {
  static propTypes = {
    item: PropTypes.objectOf(PropTypes.any),
  };

  static defaultProps = {
    item: {},
  };

  constructor(props) {
    super(props);
    this.prepareContent = this.prepareContent.bind(this);
  }

  prepareContent = () => {
    const { item } = this.props;
    let keys = Object.keys(item);
    let renderObj=[]
    for (let i = 0; i<keys.length;i++){

    }
  };

  render() {
    const { item } = this.props;

    return (
      <div>
        {item.OBJECTID}
      </div>
    );
  }
}

export default Card;
