import React from 'react'
import styles from '../styles/Home.module.css'

export default function Box(props) {
    return (
    <div style={
        { backgroundColor : props.color,
          borderWidth: '1px',
          marginLeft: '7%',
          marginTop: '7%',
          width: `${props.width}px`,
          height: `${props.height}px`,
          transform: `rotate(${props.rotate}deg)`
        }
    }></div>
  )
}
