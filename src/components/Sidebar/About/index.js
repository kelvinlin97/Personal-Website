import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
        Hi, I’m Kelvin!

        {"\n"}

      I graduated from Boston College with a B.A. in Economics in 2019 and I'm in the midst of a career transition into tech.

      {"\n"}

      When I’m not inside coding, I love to run, travel and go cafe hopping.

      {"\n"}
      Thanks for stopping by and if you think I'm a good fit for your organization, please contact me through any of the platforms listed below!
        </div>
      </div>
    )
  }
}

export default About
