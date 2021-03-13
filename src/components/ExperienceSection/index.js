import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import treppLogo from '../../assets/images/experience/trepp-logo.png'
import capLogo from '../../assets/images/experience/cap-logo.jpeg'
import lawLogo from '../../assets/images/experience/law-logo.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={lawLogo}
            colour='#403949'
            title='JW Practice Group'
            link='http://www.junwang.com/'
            timeperiod='Jun 2017 - Aug 2017'
            role='Legal Intern'
          />
        <ExperienceUnit
            logo={capLogo}
            colour='#50032D'
            title='CAP'
            link='https://www.capartners.com/'
            timeperiod='Jun 2018 - Aug 2018'
            role='Consulting Intern'
          />
           <ExperienceUnit
            logo={treppLogo}
            colour='#FFFFFF'
            title='Trepp'
            link='https://www.trepp.com/'
            timeperiod='Jan 2020 - Aug 2020'
            role='Research Analyst'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
