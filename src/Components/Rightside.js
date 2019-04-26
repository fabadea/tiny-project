import React, { Component } from 'react'
import '../App.css'

class Rightside extends Component {
  state = { isPressed: false }

  componentDidMount () {
    document.addEventListener('keydown', e => {
      const qwertyLetters = [
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y'
      ]
      qwertyLetters.filter(letter =>
        letter === e.key
          ? this.setState({
            isPressed: !this.state.isPressed
          })
          : null
      )
    })
  }

  render () {
    let isPressed = this.state.isPressed
    let className = isPressed ? 'imgStyle' : 'imgStyleActive'
    console.log(isPressed)
    return (
      <div className='rightside'>
        <p>Here's your enemy</p>
        <img
          className={className}
          src={require('./assets/loki1.jpeg')}
          alt='LOKI_1'
        />
        <img
          className={className}
          src={require('./assets/loki2.jpeg')}
          alt='LOKI_2'
        />
        <img
          className={className}
          src={require('./assets/loki3.jpeg')}
          alt='LOKI_3'
        />
      </div>
    )
  }
}

export default Rightside
