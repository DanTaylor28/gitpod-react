import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, category, comments);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
              <h2>Please fill out the form below:</h2>
              <br />
              <div>
                <label htmlFor='id-name' >Your Name:</label>
                <input value={name} 
                id='id-name'
                name='name'
                type='text'
                onChange= {
                    (event) => setName(event.target.value)} />
              </div>
              <div>
                <label htmlFor='id-category' >Query Category:</label>
                <select 
                value={category}
                id='id-category'
                name='category'
                onChange={
                    (event) => setCategory(event.target.value)}>
                  <option value='website'>Website Issue</option>
                  <option value='order'>Order Issue</option>
                  <option value='general'>General Enquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor='id-comments'>Comments:</label>
                <textarea
                value={comments}
                id='id-comments'
                name='comments'
                onChange={
                    (event) => setComments(event.target.value)}/>
              </div>
                <input type='submit' value='Submit' />
            </form>
        </div>
  )
}

export default ControlledFormHooks