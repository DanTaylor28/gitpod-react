import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        document.title = count;
    // second parameter [count] below, tells the useEffect function what properties to look for changes on before it executes. 
    // to stop it running after EVERY re-render which it would otherwise.
    }, [count]);
    useEffect(() => {
        console.log('creating timer');
        const interval = setInterval(() => {
            console.log('interval executed')
            setTime(time => time + 1)
        }, 1000);
        // return statement below stops the timer incrementing by 2 instead of 1, this happens in development mode because react runs 
        // in strict mode therfore certain functions/intervals run twice for some reason..
        return () => {
            console.log('cleaning up!')
            clearInterval(interval);
        };
    // Passing an empty array below tells the useEffect function to run only once when the page firsts mounts/loads.
    }, []);
  return (
    <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            Increment Count ({count})
        </button>
        <h2>Time is {time}</h2>
    </div>
  )
}

export default UseEffectCounter