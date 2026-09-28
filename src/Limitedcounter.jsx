import React from 'react'
import { useState, useEffect } from 'react'


const Limitedcounter = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = count
  
  }, [count])
  
  return (
    <>
      <p>{count}</p>
      <button onClick={()=>{setCount(count+1)}}>Add one</button>
      <button onClick={()=>{count >=1 ? setCount(count-1) : ""}}>Subtract one</button>
      <button onClick={()=>{setCount(count-count)}}>Reset</button>
    </>
  )
}

export default Limitedcounter