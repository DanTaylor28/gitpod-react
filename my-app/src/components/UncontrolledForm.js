import React, { Component } from 'react'

export class UncontrolledForms extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.inputCategory = React.createRef();
      this.inputComment = React.createRef();
    }

    handleSubmit = (event) => {
      // prevents form from doing default process, ie get request then refresh page
      event.preventDefault();
      console.log(this.inputName.current.value)
      console.log(this.inputCategory.current.value)
      console.log(this.inputComment.current.value)
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
              <h2>Please fill out the form below:</h2>
              <br />
              <div>
                <label htmlFor='id-name' >Your Name:</label>
                <input
                id='id-name'
                name='name'
                type='text'
                ref={this.inputName}/>
              </div>
              <div>
                <label htmlFor='id-category' >Query Category:</label>
                <select 
                id='id-category'
                name='category'
                ref={this.inputCategory}>
                  <option value='website'>Website Issue</option>
                  <option value='order'>Order Issue</option>
                  <option value='general'>General Enquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea
                id='id-comments'
                name='comments'
                ref={this.inputComment}/>
              </div>
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
  }
}

export default UncontrolledForms