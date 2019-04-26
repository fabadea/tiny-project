import React from 'react'
import Particles from 'react-particles-js'

import '../App.css'

const particleOpt = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 300
      }
    }
  }
}

const Middle = () => {
  return (
    <div className='middle'>
      <p>Neural</p>
      <Particles params={particleOpt} />
    </div>
  )
}

export default Middle
