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
      I recently pivoted from a career path within the finance world into tech. Within tech, I’m passionate about e-commerce and game development.
      {"\n"}
      When I’m not inside coding, I love to run, travel and go cafe hopping.
      {"\n"}
      Thanks for stopping by and feel free to connect with me through any of the platforms below!
        </div>
      </div>
    )
  }
}

export default About
