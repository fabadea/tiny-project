import React from 'react'
import '../App.css'
import FileSystem from './FileSystem'
import HulkComponent from './HulkComponent'
import LokiComponent from './LokiComponent'

const Header = () => {
  return (
    <div className='header'>
      <HulkComponent />
      <FileSystem />
      <LokiComponent />
    </div>
  )
}

export default Header
