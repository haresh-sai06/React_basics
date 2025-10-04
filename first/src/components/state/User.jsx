import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
      <div>{this.props.name(false)}</div>
    )
  }
}

export default User