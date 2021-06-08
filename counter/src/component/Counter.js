import React, { useState } from 'react'
const Counter = () =>{
    const [number, setnumber] = useState(0)
    return(
        <>
        <h1>Counter</h1>
        <button onClick = {setnumber(number + 1)}>+ </button>
        <button onClick = {setnumber(number - 1)}>- </button>
        </>
    )
}
export default Counter