import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn: true,
        })
        console.log(this)
    }

    handleSignOut = () => {
        this.setState({
            isLoggedIn: false,
        })
    }

    // A method that handles both signing in and out instead of the two methods above.
    // toggleIsLoggedIn = () => {
    //     this.setState((prevState) => ({
    //         isLoggedIn: !prevState.isLoggedIn,
    //     }));
    // };

    render() {
        return (
            <div>
                <MethodsAsPropsChild 
                    isLoggedIn={this.state.isLoggedIn}
                    handleSignIn={this.handleSignIn}
                    handleSignOut={this.handleSignOut}
                />
            </div>
        )
    }
}

export default MethodsAsPropsParent