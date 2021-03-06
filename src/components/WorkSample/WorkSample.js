import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './WorkSample.scss'

class WorkSample extends Component {
  render() {
    const { title, topics, year, critics, context, description, link, image, className, onClick } = this.props
    return (
      <div className={`work-sample ${className}`} onClick={onClick}>
        <Grid container className="work-sample-header">
          <Grid item xs={12} sm={4} className="title-info">
            <h3>{title}</h3>
          </Grid>
          <Grid item xs={12} sm={8} className="desc-info">
            <p>{description}</p>
            {link ? <p className="info-link"><a href={link} target="_blank">See more</a></p> : (null)}
          </Grid>
        </Grid>
        <Grid container className="work-sample-image">
          <Grid item xs={12} className="image">
            <img src={image}></img>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default WorkSample;
