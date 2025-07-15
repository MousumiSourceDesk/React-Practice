import React, { useState,useEffect } from 'react'

const Clock = ({mode}) => {
    const [color,setColor]=useState("")
    useEffect (()=>{
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    },[])
    const [time,setTime]=useState(0)

  return (
    
    <div style={{backgroundColor:`${mode === 'dark' ? 'dimgrey' : 'lavender'}`,color:`${color}`}}>
        <h1>Time:{time}</h1>
        <select onChange={(event)=>{setColor(event.target.value)}}>
            <option value={"black"}>Black</option>
            <option value={"red"}>Red</option>
            <option value={"green"}>Green</option>
            <option value={"blue"}>Blue</option>
        </select>
    </div>
  )
}
export default Clock