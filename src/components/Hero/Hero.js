import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Hero.scss'

import ClaraImage from "../../assets/personal/clara.png";
import ClaraReferences from "../../assets/downloads/Clara-Dykstra_References_Work.pdf";
import ClaraResume from "../../assets/downloads/210615_Dykstra_Resume.pdf";

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
            <Grid item xs={12} md={10} className="statement-header">Hi! I'm Clara, an architectural and urban designer living in Los Angeles, CA.</Grid>
            <Grid item xs={10} md={6} className="statement-subheader">
              I've had a few jobs, see what they thought of me:
            </Grid>
            <Grid item xs={12} className="statement-cta">
              <a href={ClaraReferences} target="_blank">
                <div className="button hero-button">View my references</div>
              </a>
            </Grid>
          </Grid>
          <Grid container className="statement-footer">
            <Grid item xs={4}>Or take a look at my <a href={ClaraResume} target="_blank">resume</a></Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Hero;
