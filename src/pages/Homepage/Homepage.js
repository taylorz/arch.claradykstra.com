import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import WorkSample from '../../components/WorkSample/WorkSample';
import './Homepage.scss';

import GSAPP from '../../constants/gsappWS';
import REPLACE from '../../constants/replaceWS';
import OTHER from '../../constants/otherWS';

class Homepage extends Component {
  render() {
    return (
      <SiteWrapper>
        <PageContainer className="homepage-container">
            <>
            <div className="work-section">
              <div className="section-title">COLUMBIA UNIVERSITY GSAPP</div>
            </div>
            {GSAPP.map((sample) =>
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
            <div className="work-section">
              <div className="section-title">REPLACE URBAN STUDIO</div>
            </div>
            {REPLACE.map((sample) =>
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
            <div className="work-section">
              <div className="section-title">PUBLISHED WORK</div>
            </div>
            {OTHER.map((sample) =>
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
            </>
        </PageContainer>
      </SiteWrapper>
    );
  }
}

export default Homepage;
