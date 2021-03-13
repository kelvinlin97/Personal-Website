import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import hkuLogo from '../../assets/images/education/hku-logo.gif'
import bcLogo from '../../assets/images/education/bc-logo.png'
import fsaLogo from '../../assets/images/education/fullstack-academy-logo.png'

class EducationSection extends React.Component {
  render() {
    return (
      <Section title="Education">
        <div className="row">
        <ExperienceUnit
            logo={hkuLogo}
            colour='#FFFFFF'
            title='HKU'
            link='https://www.hku.hk/'
            timeperiod='Sep 2017 - Dec 2017'
          />
           <ExperienceUnit
            logo={bcLogo}
            colour='#FFFFFF'
            title='Boston College'
            link='https://www.bc.edu/'
            timeperiod='Aug 2015 - May 2019'
          />
          <ExperienceUnit
            logo={fsaLogo}
            colour='#403949'
            title='Fullstack Academy'
            link='https://www.fullstackacademy.com/'
            timeperiod='Oct 2020 - Feb 2021'
          />
        </div>
      </Section>
    )
  }
}

export default EducationSection
