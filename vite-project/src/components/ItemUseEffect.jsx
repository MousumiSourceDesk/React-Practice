import React, { useEffect } from 'react'
import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

const ItemUseEffect = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0);
  const [display, setDisplay] = useState(true)
  function handelCall() {
    console.log("I am a function")
  }
  function handelCallOnData() {
    console.log("I am a function from data")
  }
  useEffect(() => {
    handelCall();
  }, [])
  useEffect(() => {
    handelCallOnData();
  }, [data])
  useEffect(() => {
    return () => {
      console.log("Toggle Click");
      
    }
  }, [display])
  

  return (
    <div>
      <h1>Use effect and toggle to show and hide data and count</h1>
      {
        display ? <>
          <h2>count: {count}</h2>
          
          <h2>data: {data}</h2>
        </> : null
      }
      <Button className='m-3' variant='primary' onClick={() => setCount(count + 1)}>Count</Button>
      <Button className='m-3' variant='success' onClick={() => setData(data + 1)}>Data</Button>
      <Button className='m-3' variant='danger' onClick={() => setDisplay(!display)}>Toggle</Button>
    </div>
  )
}
export default ItemUseEffect
