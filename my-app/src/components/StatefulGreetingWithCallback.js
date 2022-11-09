import React from 'react'

class StatefulGreetingWithCallback extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            introduction: 'Hello',
            buttonText: 'Exit',
        };
    }

    handleClick() {
        this.setState({
            introduction: 'Goodbye',
            buttonText: 'Enter',
        }, () => {
            // same code as below but in callback function so it does not
            // execute until setState has finished. 
            console.log('new state', this.state.introduction);
            console.log('new state', this.state.buttonText); 
        })
        // Below code will execute too fast because setState is ascynchronous meaning
        // it executes in the background and other code will continue to run.
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name},
                {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreetingWithCallback;