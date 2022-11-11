import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {
        props.isLoggedIn ? (
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

export default UserMessage