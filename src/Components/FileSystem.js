import React, { Component } from 'react'
import '../App.css'
import {
  FiActivity,
  FiAirplay,
  FiAlignCenter,
  FiSettings,
  FiShield,
  FiCpu,
  FiBattery
} from 'react-icons/fi'

class FileSystem extends Component {
  state = { mIsPressed: false }

  componentDidMount () {
    document.addEventListener('keydown', e => {
      if (e.key === 'f' || e.key === 'F') {
        this.setState({
          mIsPressed: !this.state.mIsPressed
        })
      }
    })
  }

  render () {
    let mIsPressed = this.state.mIsPressed
    let className = mIsPressed ? 'headerFSactive' : 'headerFS'
    return (
      <div className={className}>
        <FiAlignCenter className='react-icons' />
        <FiActivity className='react-icons' />
        <FiAirplay className='react-icons' />
        <FiShield className='react-icons' />
        <FiCpu className='react-icons' />
        <FiSettings className='react-icons' />
        <FiBattery className='react-icons' />
      </div>
    )
  }
}

export default FileSystem
