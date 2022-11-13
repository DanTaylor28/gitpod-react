import React from 'react'

function RenderingLists() {
  const bookList = [
    'to kill a mockingbird',
    'the great gatsby',
    'the catcher in the rye'
  ]

  return (
    <div>
      {bookList.map(book => {
        return <h2>{book}</h2>
      })}
    </div>
  )
}

export default RenderingLists