import React from 'react'

class StatefulGreetingWithPrevState extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            introduction: 'Hello',
            buttonText: 'Exit',
            count: 0,
        };
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === 'Hello' ? 'Goodbye' : 'Hello',
            buttonText: this.state.buttonText === 'Exit' ? 'Enter': 'Exit',
        }, () => {
            console.log(this.state.introduction);
            console.log(this.state.buttonText); 
        })
    }

    incrementClick() {
        this.setState({
            count: this.state.count += 1,
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name},
                {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementClick()}>Increment</button>
                <h4>You've clicked {this.state.count} times!</h4>
            </div>
        )
    }
}

export default StatefulGreetingWithPrevState;