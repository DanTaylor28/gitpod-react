import React, { Component } from 'react'

export class ControlledForms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: ''
      }
    }

    handleNameChange = (event) => {
      this.setState({
        name: event.target.value
      })
    }

    render() {
        return (
        <div>
            <form>
                <label htmlFor='id-name' >Your Name:</label>
                <input value={this.state.name} 
                id='id-name'
                name='name'
                type='text'
                onChange={this.handleNameChange} />
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
  }
}

export default ControlledForms