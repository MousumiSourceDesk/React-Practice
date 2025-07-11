import { useState } from 'react'
import { Button } from 'react-bootstrap';
import ItemAlert from './ItemAlert';

const StudentChange = ({color}) => {
  const [val,setVal]=useState("");
  const[displayAlert,setDisplayAlert]=useState("")
  return (
    <div>
        <h1>write anything to show in zoom</h1>
        <input type='text' onChange={(event)=>setVal(event.target.value)} value={val} placeholder='write anything....'/>
        <h3 style={{color:color}}>{val}</h3>
        <Button className='m-3' onClick={()=>{setVal(""), setDisplayAlert(true)}}>Clear </Button>
        {
          displayAlert ? <ItemAlert setDisplayAlert={setDisplayAlert}/> : null
        }
    </div>
  )
}

export default StudentChange