import React from 'react'

function EventsFunctional() {
    function clickHandler() {
        console.log('you clicked the functional button');
    }
    return (
        <div>
            <button onClick={clickHandler}>click me - functional component</button>
        </div>
    )
    }

export default EventsFunctional