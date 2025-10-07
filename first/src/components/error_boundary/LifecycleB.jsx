import React, { Component } from 'react'
import LifecycleA from './LifecycleA'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Haresh'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }
  render() {
    return (
      console.log('LifecycleB render'),
      <div>LifecycleB
        <LifecycleA />
    </div>
    )
  }
}

export default LifecycleB