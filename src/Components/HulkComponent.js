import React, { Component } from 'react'
import '../App.css'

class HulkComponent extends Component {
  render () {
    return (
      <div className='headerHulk'>
        <p>Here's why I'm suggesting Hulk</p>
        <video width='400px' height='300px' controls>
          <source src={require('./assets/punygod.mp4')} type='video/mp4' />
        </video>
      </div>
    )
  }
}

export default HulkComponent
