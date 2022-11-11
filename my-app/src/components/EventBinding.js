import React from 'react'

class EventBinding extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            introduction: 'Hello',
            buttonText: 'Exit',
        };
    }

    // Ways to bind event handlers.
    // The best way to do it is as below, defining the event handler as an arrow function.
    // If you need to pass parameters to the handleClick instead define it as a regular function 
    // and use an arrow function on the call to the function on the button below (commented out code)

    handleClick = () => {
        this.setState({
            introduction: 'Goodbye',
            buttonText: 'Enter',
        })
        console.log(this.state.introduction)
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name},
                {this.props.greeting}</h1>
                {/* <button onClick={() => this.handleClick()}>{this.state.buttonText}</button> */}
                <button onClick={this.handleClick}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default EventBinding;