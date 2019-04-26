import React, { Component } from 'react'
import Iframe from 'react-iframe'
import '../App.css'

class LokiComponent extends Component {
  render () {
    return (
      <div className='headerHulk'>
        <p>Here's what Loki's capable of</p>
        <Iframe
          url='https://www.youtube.com/embed/8W6d3sqvyU0'
          width='400px'
          height='300px'
        />
      </div>
    )
  }
}

export default LokiComponent
