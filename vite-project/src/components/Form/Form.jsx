import { useState } from 'react'
import { Button } from 'react-bootstrap';

const Form=()=> {
    const [val,setVal]=useState([]);//store array value
    const [isChecked,setChecked]=useState(false);
    const handleChange=(event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setVal([...val,event.target.value]);
            console.log(setVal);
        }
        else
            setVal([...val.filter(item=>item!=event.target.value)]);
    }
    const handleClear=()=>{
      setVal([]);
      setChecked(false);
    }
  return (
    <div style={{marginLeft:" 300px", color:"green"}}>

        <input type='checkbox' id="PHP" name="PHP" value="PHP" onChange={(event)=>{handleChange(event)}} checked={isChecked}/>
        <label htmlFor='PHP'>PHP</label><br/>

        <input type='checkbox' id="JAVA" name="JAVA" value="JAVA" onChange={(event)=>{handleChange(event)}} checked={isChecked}/>
        <label htmlFor='JAVA'>JAVA</label><br/>

        <input type='checkbox' id="C++" name="C++" value="C++" onChange={(event)=>{handleChange(event)}} checked={isChecked}/>
        <label htmlFor='C++'>C++</label><br/>

        <input type='checkbox' id="Python" name="Python" value="Python" onChange={(event)=>{handleChange(event)}} checked={isChecked}/>
        <label htmlFor='Python'>Python</label><br/>

        <input type='checkbox' id="Ruby" name="Ruby" value="Ruby" onChange={(event)=>{handleChange(event)}} checked={isChecked}/>
        <label htmlFor='Ruby'>Ruby</label><br/>


        <h1>Selected Language: {val.toString()}</h1>
        <Button variant='danger' onClick={handleClear}>Clear Now</Button>
    </div>

  )
}
export default Form