import React, { useState,useEffect } from 'react'

const Clock = ({mode}) => {
    useEffect (()=>{
        setInterval(() => {
            setTime(new Date().toString())
        }, 1000);
    },[])
    const [time,setTime]=useState(0)

  return (
    <div style={{backgroundColor:`${mode === 'dark' ? 'black' : 'white'}`}}><h1>Time:{time}</h1></div>
  )
}
export default Clock