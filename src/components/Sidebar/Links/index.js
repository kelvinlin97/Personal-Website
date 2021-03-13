import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://www.github.com/kelvinlin97" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/kelvindlin" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="icon">
            <a href="mailto:kelvindlin97@gmail.com" target="_blank">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
          <li className="icon">
            <a href="youtube.com/channel/UCaaMQ9g1YhvXG6BO4f_vkEw" target="_blank">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
        </ul>
        <div className="small">
          Built using <a href="https://www.gatsbyjs.org/" target="_blank">GatsbyJS</a>
        </div>
      </div>
    )
  }
}

export default Links
