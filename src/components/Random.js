import React from 'react'

export function Random(props) {
       let result = Math.floor(Math.random() * (props.max - props.min +1)) ;
     
  return (
    <div>Your random number between {props.min} and {props.max} : {result} </div>
  )
}

