import React from 'react'
import '../App.css'
import Leftside from './Leftside'
import Middle from './Middle'
import Rightside from './Rightside'

const Main = () => {
  return (
    <div className='main'>
      <Leftside />
      <Middle />
      <Rightside />
    </div>
  )
}

export default Main
