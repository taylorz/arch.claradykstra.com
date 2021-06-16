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
            <a href="#replace">rePlace Urban Studio</a>
            <a href="#columbia">Columbia University GSAPP</a>
            <a href="#published">Published Work</a>
          </Grid>
        </Grid>
        <Hero/>
        <div className="bio-section">
          <Grid container className="bio-wrapper">
            <Grid item xs={12} md={8} className="bio-text">
              <p>In my five years of professional experience in Architecture and Urban Design, I have worked on projects located in New York City, Newark, NJ, Miami, Fl, and Los Angeles, CA and on a variety of building types: a 1,000 ft mixed-used office and residential tower, small multifamily residences, community centers, office buildings, schools, and single family homes.</p>
              <p>Through my work, I have proven myself to be a vital asset for projects ranging in scale from a small parcel to a city block—analyzing building and zoning codes, designing buildings and small spaces, creating residential and health permit sets, and designing scripts to precisely model and generate fabrication drawings for building fabricators and engineers.</p>
              <p>In my last year at rePlace Urban Studio, I led three out of the five projects my firm had with our primary client. In every project I have worked on in the last five years, I have met with clients regularly, presenting strategic solutions unique to the circumstances of each project and helping them make the best decisions for their project, their budget, and their timeline.</p>
            </Grid>
          </Grid>
        </div>
        <PageContainer className="homepage-container">
            <>
            <div className="work-section" id="replace">
              <Fade bottom distance="10px">
                <div className="section-title">rePlace Urban Studio</div>
                <div className="section-subtitle">2017-2020; 5 Projects</div>
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
                    link={sample.link}
                    image={sample.image}
                  />
                )}
              </>
            )}
            <div className="work-section" id="columbia">
              <Fade bottom distance="10px">
                <div className="section-title">Columbia University GSAPP</div>
                <div className="section-subtitle">2014-2017; 5 Projects</div>
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
                    link={sample.link}
                    image={sample.image}
                  />
                )}
              </>
            )}
            <div className="work-section" id="published">
              <Fade bottom distance="10px">
                <div className="section-title">Published Work</div>
                <div className="section-subtitle">2017-2018; 3 Projects</div>
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
                    link={sample.link}
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
