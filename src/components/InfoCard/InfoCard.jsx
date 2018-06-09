import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../App.css';
import Filter from "@material-ui/icons/FilterNone"


const styles = theme => ({
  root: {
    minWidth: '100%',
    borderBottom: '1px solid #00000066',
  },
  resultSearch: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    minWidth: '50%',
  },
  list: {
    padding: 2
  },
  item: {
    padding: 2,
    paddingLeft: 10
  },
  link:{
    textDecoration: "none",
    color:'#3f51b5'
  }

});


class InfoCard extends Component {
  static propTypes = {
    item: PropTypes.objectOf(PropTypes.any),
  };

  static defaultProps = {
    item: {},
  };

  constructor(props) {
    super(props);
    this.prepareDescription = this.prepareDescription.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick=()=>{
console.log('1')
  }

  prepareDescription = item => {
    console.log('prepareDescription', item);
    let keys = Object.keys(item);
    let description;

    description = keys.map((key) => {
      if (key !== 'geometry') {
        let forKey = item.OBJECTID.text + item[key].aliasName;
        return <Typography component="p" key={forKey}>{item[key].aliasName}: {item[key].text} </Typography>
      }
    });

    return <div>{description}</div>
  }

  render() {
    const { item, classes } = this.props;

    return (

      <div className={classes.root}>
        <div className="card-info">
          <div className="poster">
            <h2>
              {item.localName.text || 'Объект'}
            </h2>
            <Filter/>
            <div className="descr">
              <iframe src="https://developers.arcgis.com/javascript/3/samples/map_simple/" className="setFrame">
              </iframe>
            </div>

          </div>
          {this.prepareDescription(item)}
        </div>
        <div>
          <Button size="small" color="primary" onClick={this.onClick}>
            <a className={classes.link} href="http://iktp.lenenergo.ru/imap/src/views/index.html">
            Показать на карте
            </a>
          </Button>
          <Button size="small" color="primary">
            <a className={classes.link} href="http://iktp.lenenergo.ru/imap/src/views/index.html">
            Показать схему
            </a>
          </Button>
          <Button size="small" color="primary">
            Документы
          </Button>
        </div>
      </div>

    );
  }
}

export default withStyles(styles)(InfoCard);
