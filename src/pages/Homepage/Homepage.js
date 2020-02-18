import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import ProjectInformation from '../../components/ProjectInformation/ProjectInformation';
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
              <div className="section-title">Columbia University GSAPP</div>
            </div>
            {GSAPP.map((project) =>
              <>
                <ProjectInformation
                  project={project.project}
                  topics={project.topics}
                  year={project.year}
                  critics={project.critics}
                  context={project.context}
                />
                {project.samples.map((sample) =>
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
            )}
            <div className="work-section">
              <div className="section-title">REPLACE URBAN STUDIO</div>
            </div>
            {REPLACE.map((project) =>
              <>
                <ProjectInformation
                  project={project.project}
                  topics={project.topics}
                  year={project.year}
                  critics={project.critics}
                  context={project.context}
                />
                {project.samples.map((sample) =>
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
            )}
            <div className="work-section">
              <div className="section-title">PUBLISHED WORK</div>
            </div>
            {OTHER.map((project) =>
              <>
                <ProjectInformation
                  project={project.project}
                  topics={project.topics}
                  year={project.year}
                  critics={project.critics}
                  context={project.context}
                />
                {project.samples.map((sample) =>
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
            )}
            </>
        </PageContainer>
      </SiteWrapper>
    );
  }
}

export default Homepage;


// <WorkSample
//   title={ project.samples.map((sample) => sample.title )}
//   topics={ project.samples.map((sample) => sample.topics )}
//   year={project.samples.year}
//   critics={project.samples.critics}
//   context={project.samples.context}
//   description={project.samples.description}
//   image={project.samples.image}
// />
