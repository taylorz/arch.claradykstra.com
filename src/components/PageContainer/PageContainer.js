import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import './PageContainer.scss'

class PageContainer extends Component {
  render() {
    const { children, className, onClick } = this.props
    return (
      <Grid item className={`page-container ${className}`} onClick={onClick}>
        {children}
      </Grid>
    );
  }
}

export default PageContainer;
