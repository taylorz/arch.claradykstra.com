import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './ProjectInformation.scss';

class ProjectInformation extends Component {
  render() {
    const { children, className, project, topics, year, critics, context} = this.props
    return (
      <div className={`project-information-wrapper ${className}`}>
        <Grid container className="project-information" spacing={4}>
          <Grid item xs={12} md={12} className="project-title">{project}</Grid>
          <Grid item xs={12} md={3} className="project-info-item">{topics}</Grid>
          <Grid item xs={12} md={2} className="project-info-item">{year}</Grid>
          <Grid item xs={12} md={3} className="project-info-item">{critics}</Grid>
          <Grid item xs={12} md={3} className="project-info-item">{context}</Grid>
        </Grid>
      </div>
    );
  }
}

export default ProjectInformation;
