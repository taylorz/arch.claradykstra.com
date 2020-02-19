import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
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
        <Grid container className="nav-wrapper">
          <Grid item xs={12} md={6} className="nav-left">
            <a href="/">Clara Dykstra Portfolio</a>
          </Grid>
          <Grid item xs={12} md={6} className="nav-right">
            <a href="/">Home</a>
            <a href="#columbia">Columbia University GSAPP</a>
            <a href="#replace">rePlace Urban Studio</a>
            <a href="#published">Published Work</a>
          </Grid>
        </Grid>
        <Hero/>
        <div className="bio-section">
          <Grid container className="bio-wrapper">
            <Grid item xs={12} md={6} className="bio-text">
              <p>I have a background in anthropology, film studies, and music performance. In 2017, I graduated Columbia GSAPP with a Master of Architecture. For the past two and half years I have been applying my training as an architect in the field of urban design at rePlace Urban Studio. Through this work, I have proven myself to be a vital asset for projects ranging in scale from a small parcel to a city block. View samples of my work below!</p>
            </Grid>
          </Grid>
        </div>
        <PageContainer className="homepage-container">
            <>
            <div className="work-section" id="columbia">
              <Fade bottom distance="10px">
                <div className="section-title">Columbia University GSAPP</div>
                <div className="section-subtitle">2010</div>
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
            <div className="work-section" id="replace">
              <Fade bottom distance="10px">
                <div className="section-title">rePlace Urban Studio</div>
                <div className="section-subtitle">2010</div>
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
            <div className="work-section" id="published">
              <Fade bottom distance="10px">
                <div className="section-title">Published Work</div>
                <div className="section-subtitle">2010</div>
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
        <Footer/>
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
