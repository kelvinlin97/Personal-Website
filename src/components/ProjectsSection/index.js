import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import capstoneLogo from '../../assets/images/projects/capstone-project.png'
import visualizerLogo from '../../assets/images/projects/dom-parser.png'
import ecommerceLogo from '../../assets/images/projects/gracechopper.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={ecommerceLogo}
            colour="#FFFFFF"
            title="Grace Chopper"
            link="http://gracechopper.herokuapp.com/"
            timeperiod="Jan 2021"
            subtitle="Fully deployed e-commerce site with a relational backend built using Sequelize, Express, Postgresql, and Node.js. Front-end UI implemented with React, Redux, and Bootstrap."
          />
          <ExperienceUnit
            logo={capstoneLogo}
            colour="#20DC6B"
            title="Capstone Project"
            link="https://seniorphaser.herokuapp.com/"
            timeperiod="Jan 2021 - Feb 2021"
            subtitle="A multiplayer survival shooter built using Express, Parcel, Phaser, Sockets.IO, and Tiled.io."
          />
          <ExperienceUnit
            logo={visualizerLogo}
            colour="#312F31"
            title="DOM Tree Visualizer"
            link="https://0xedward.github.io/EQKL"
            timeperiod="Jan 2021 - Current"
            subtitle="A browser parser and DOM tree visualizer built using D3.js with end-to-end testing using Selenium."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
