import React from 'react'
import { useState } from 'react'


const Limitedcounter = () => {
  const [count, setcount] = useState(0)
  return (
    <>
      {count >= 0 ? count : "No going below Zero now reload" }
      <br />
      <button onClick={()=>{setcount(count+1)}}>Add one</button>
      <button onClick={()=>{setcount(count-1)}}>Subtract one</button>
      <button onClick={()=>{setcount(count-count)}}>Reset</button>
    </>
  )
}

export default Limitedcounter