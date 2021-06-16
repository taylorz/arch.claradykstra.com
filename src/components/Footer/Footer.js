import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Footer.scss'

import ClaraReferences from "../../assets/downloads/Clara-Dykstra_References_Work.pdf";
import ClaraResume from "../../assets/downloads/210615_Dykstra_Resume.pdf";

class Footer extends Component {
  render() {
    const { className, onClick } = this.props
    return (
      <Grid container className="footer">
        <Grid item xs={12} md={6} className="footer-column main">
        <ul>
          <li><a href="/">Clara Dykstra Portfolio</a></li>
        </ul>
        </Grid>
        <Grid item xs={12} md={3} className="footer-column">
          <ul>
            <li><a href={ClaraReferences} target="_blank">References</a></li>
            <li><a href={ClaraResume} target="_blank">Resume</a></li>
          </ul>
        </Grid>
        <Grid item xs={12} md={3} className="footer-column">
          <ul>
            <li><a href="https://www.linkedin.com/in/clara-dykstra/" target="_blank">LinkedIn</a></li>
            <li><a href="mailto:claradykstra@gmail.com">claradykstra@gmail.com</a></li>
          </ul>
        </Grid>
      </Grid>
    );
  }
}

export default Footer;
