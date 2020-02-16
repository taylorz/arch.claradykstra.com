import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import WorkSample from '../../components/WorkSample/WorkSample';
import './Homepage.scss';

import SAMPLES from '../../constants/workSamples';

class Homepage extends Component {
  render() {
    return (
      <SiteWrapper>
        <PageContainer>
            {SAMPLES.map((sample) =>
              <WorkSample
                title={sample.title}
                topics={sample.topics}
                year={sample.year}
                critics={sample.critics}
                context={sample.context}
                description={sample.description}
                image={sample.image}
              />
            )}
        </PageContainer>
      </SiteWrapper>
    );
  }
}

export default Homepage;
