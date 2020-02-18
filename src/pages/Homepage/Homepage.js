import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Hero from '../../components/Hero/Hero';
import PageContainer from '../../components/PageContainer/PageContainer';
import ProjectInformation from '../../components/ProjectInformation/ProjectInformation';
import WorkSample from '../../components/WorkSample/WorkSample';
import Fade from 'react-reveal/Fade';
import './Homepage.scss';

import GSAPP from '../../constants/gsappWS';
import REPLACE from '../../constants/replaceWS';
import OTHER from '../../constants/otherWS';

class Homepage extends Component {
  render() {
    return (
      <SiteWrapper>
        <Hero/>
        <div className="bio-section">
          <Grid container className="bio-wrapper">
            <Grid item xs={12} md={6} className="bio-text">
              <p>I am an architectural and urban designer with a background in anthropology, film studies, and music performance. For the past two and half years I have been applying my training as an architect in the field of urban design. Through this work, I have proven myself to be a vital asset for projects ranging in scale from a small parcel to a city block—analyzing building and zoning codes and designing building massings and floor plans.</p>
            </Grid>
          </Grid>
        </div>
        <PageContainer className="homepage-container">
            <>
            <div className="work-section">
              <Fade bottom distance="10px">
                <div className="section-title">Columbia University GSAPP</div>
              </Fade>
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
              <Fade bottom distance="10px">
                <div className="section-title">rePlace Urban Studio</div>
              </Fade>
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
              <Fade bottom distance="10px">
                <div className="section-title">Published Work</div>
              </Fade>
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
