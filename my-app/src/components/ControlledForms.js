import React, { Component } from 'react'

export class ControlledForms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         category: 'website',
         comments: ''
         
      }
    }

    handleNameChange = (event) => {
      this.setState({
        name: event.target.value
      })
    }

    handleCategoryChange = (event) => {
      this.setState({
        category: event.target.value
      })
    }

    handleCommentsChange = (event) => {
      this.setState({
        comments: event.target.value
      })
    }

    handleSubmit = (event) => {
      // prevents form from doing default process, ie get request then refresh page
      event.preventDefault();
      console.log(this.state)
    }

    // This one arrow function could handle all the form changes in 1
    // making the 3 above functions unnecessary

    // handleChange = (event) => {
    //   const {name, value} = event.target
    //   this.setState({
    //     [name]: value
    //   })
    // }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
              <h2>Please fill out the form below:</h2>
              <br />
              <div>
                <label htmlFor='id-name' >Your Name:</label>
                <input value={this.state.name} 
                id='id-name'
                name='name'
                type='text'
                onChange={this.handleNameChange} />
              </div>
              <div>
                <label htmlFor='id-category' >Query Category:</label>
                <select 
                value={this.state.category}
                id='id-category'
                name='category'
                onChange={this.handleCategoryChange}>
                  <option value='website'>Website Issue</option>
                  <option value='order'>Order Issue</option>
                  <option value='general'>General Enquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea
                value={this.state.comments}
                id='id-comments'
                name='comments'
                onChange={this.handleCommentsChange}/>
              </div>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
  }
}

export default ControlledForms