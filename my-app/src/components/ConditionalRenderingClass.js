import React, { Component } from 'react'

export class ConditionalRenderingClass extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded: true,
       isLoggedIn: true,
    }
  }
  render() {
    return (
        <div>
            <h1>{this.state.isLoaded ? 'Loaded' : 'Loading'}</h1>
            {this.state.isLoggedIn ? (
                <div>
                    <p>Welcome to the site! please complete the step below:</p>
                    <ol>
                        <li>Confirm your email</li>
                        <li>Complete your profile</li>
                        <li>Signup to the newsletter</li>
                    </ol>
                </div>
            ) : ('Please sign in')}
        </div>
    )
  }
}

export default ConditionalRenderingClass