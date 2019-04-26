import React, { Component } from 'react'
import '../App.css'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      background: 'red',
      fontweight: 'bold',
      padding: '15px 15px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}
  >
    <b>{text}</b>
  </div>
)

class Leftside extends Component {
  static defaultProps = {
    center: {
      lat: 40.7831,
      lng: -73.9712
    },
    zoom: 11
  }

  render () {
    return (
      <div className='leftside'>
        <p>Here's his current location</p>

        <div style={{ height: '100%', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyAjMx7VamzFjbfTGcdJjvN_rmAyTZiQvQc'
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={40.7831}
              lng={-73.9712}
              text='Loki is HERE'
            />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default Leftside
