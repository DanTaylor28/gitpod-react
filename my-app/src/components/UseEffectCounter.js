import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count
    // second parameter [count] below, tells the useEffect function what properties to look for changes on before it executes. 
    // to stop it running after EVERY re-render which it would otherwise.
    }, [count]);
  return (
    <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            Increment Count ({count})
        </button>
    </div>
  )
}

export default UseEffectCounter