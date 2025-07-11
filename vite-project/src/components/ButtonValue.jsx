import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import User from './User.jsx';
import StudentProp from './studentProp.jsx';
import ItemProps from './ItemProps.jsx';
import StudentChange from './StudentChange.jsx';
const ButtonValue = ({mode}) => {
    const [display, setDisplay] = useState(true);

    const fruit = (name) => {
        alert(name)
    }

    let userObject = {
        name: "Mousumi",
        age: 22,
        email: "mousumi@gmail.com"
    }//passing as an object


    const [name, setName] = useState("");

    
    return (
        <>
            {/*shop value on alert box*/}
            <div style={{ border: '2px solid maroon', backgroundColor: `${mode === 'dark' ? 'dimgrey' : 'lavender'}`, color: `${mode === 'dark' ? 'white' : 'black'}` }}>
                {/* function call with parameter*/}
                {/*react don't want function call react wants function describtion*/}
                <Button variant='success' style={{ margin: '10px' }} onClick={() => { fruit("apple") }}>Apple</Button><br />
                <Button variant='danger' style={{ margin: '10px' }} onClick={() => { fruit("mango") }}>Mango</Button><br />

            </div>

            {/*Student name show on h1*/}
            {/*hide and show on change state*/}
            <div style={{ border: '2px solid blue', backgroundColor: `${mode === 'dark' ? 'dimgrey' : 'lavender'}`, color: `${mode === 'dark' ? 'white' : 'black'}` }}>
                <Button variant='warning' style={{ margin: '10px' }} onClick={() => { setDisplay(!display) }}>Display</Button>{/*display depends on button click*/}

                {
                    display ? <User mode={mode} /> : null
                }

            </div>


            {/*<ItemProps name={name}/>*/}
            {/*passing as a object*/}
            <div style={{ border: '2px solid yellow', backgroundColor: `${mode === 'dark' ? 'dimgrey' : 'lavender'}`, color: `${mode === 'dark' ? 'white' : 'black'}` }}>

                <ItemProps userObject={userObject} />
            </div>



            {/* load after getting name*/}
            <div style={{ border: '2px solid green', backgroundColor: `${mode === 'dark' ? 'dimgrey' : 'lavender'}`, color: `${mode === 'dark' ? 'white' : 'black'}` }}>
                {

                    name && <StudentProp name={name} />
                }

                <Button className='m-3' onClick={() => { setName('ankita') }}>Update student name</Button>
                <Button variant='danger' className='m-3' onClick={() => { setName('') }}>Delete student name</Button>
            </div>


            {/*Student name show on h1*/}
            <div style={{ border: "2px solid brown", backgroundColor: `${mode === 'dark' ? 'dimgrey' : 'lavender'}`, color: `${mode === 'dark' ? 'white' : 'black'}` }}>
                <StudentChange mode={mode} />
            </div>
        </>
    )
}

export default ButtonValue