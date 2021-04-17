import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import EducationSection from '../components/EducationSection'
import ResumeSection from '../components/ResumeSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          <span className="bold">Kelvin Lin</span>
        </h5>

        <h3 className="bold">
          Former financial research analyst and aspiring software engineer with experience building out e-commerce websites, 2d games, and developer tools.
        </h3>
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResumeSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
