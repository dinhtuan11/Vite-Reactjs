import React, { useState } from 'react'

export default function Count() {
    const [Count, setCount] = useState(0)
    const increment = () => {
        setCount (Count + 1 )
    }
    
    const decrement = () => {
        setCount (Count - 1)
    }
  return (
    <div>
    <button onClick={increment}> Tiến </button>
    {Count}
    <button onClick={decrement}> Lùi </button>
        
    </div>
  )
}
