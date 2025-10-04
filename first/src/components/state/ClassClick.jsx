import React, { Component } from 'react'

class ClassClick extends Component {
    eventHandler(){
        alert('Button Clicked')
    }
  render() {
    return (
      <div>
        <button onClick={this.eventHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick