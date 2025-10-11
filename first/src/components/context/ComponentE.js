import React, { Component } from 'react'
import { UserConsumer } from './UserContext';

export class ComponentE extends Component {
  render() {
    return (
      <UserConsumer>
        {
            (username) => {
                return <div>
                    Hello {username}
                </div>
            }
        }
      </UserConsumer>
    )
  }
}

export default ComponentE