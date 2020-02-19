import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Hero.scss'

import ClaraImage from "../../assets/personal/clara.png";

class Hero extends Component {
  render() {
    const { className, onClick } = this.props
    return (
      <Grid container className="hero">
        <Grid item xs={12} md={6} className="hero-image">
          <div className="hero-image-wrapper"></div>
        </Grid>
        <Grid item xs={12} md={6} className="hero-statement">
          <Grid container className="statement-wrapper">
            <Grid item xs={12} md={10} className="statement-header">Hi! I'm Clara. An architectural and Urban designer living in Los Angeles, CA.</Grid>
            <Grid item xs={10} md={6} className="statement-subheader">
              I've had a few jobs, see what they thought of me:
            </Grid>
            <Grid item xs={12} className="statement-cta">
              <div className="button hero-button">View my references</div>
            </Grid>
          </Grid>
          <Grid container className="statement-footer">
            <Grid item xs={4}>Or take a look at my <a href="">resume</a></Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Hero;
