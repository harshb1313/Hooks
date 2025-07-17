import React from 'react'

function Square(props) {
  return (
    <div>
      <div className='div-column' onClick={props.onClick}>
        <h6>{props.value}</h6>
      </div>
    </div>
  )
}

export default Square
