import React from 'react'

export function BoxColor(props) {
  return (
    <div style={{ backgroundColor: `rgba(${props.r}, ${props.g}, ${props.b})`}} className="box">
        rgb: ({props.r},{props.g},{props.b} )
      </div>
  )
}

