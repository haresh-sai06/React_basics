import React from 'react'

function FunctionClick() {
    function eventHandler() {
        alert('Button Clicked')
    }
  return (
    <div>
        <button onClick={eventHandler}>Click Me</button>
    </div>
  )
}

export default FunctionClick