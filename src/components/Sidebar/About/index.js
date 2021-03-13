import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          I enjoy long-distance running, watching sappy movies, reading, and tinkering with Unreal Engine.
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1tafbb6jJbrDOC4Yx6LB3KkJBUEKHB16N/view?usp=sharing"> Resume </a>
        </div>
      </div>
    )
  }
}

export default About
