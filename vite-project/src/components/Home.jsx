import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Tiger from '../assets/Tiger.jpg'
import Tiger2 from '../assets/Tiger2.jpg'
import ButtonValue from './ButtonValue.jsx';
import ItemAlert from './ItemAlert.jsx';

const Home = ({ mode }) => {
  const [image, setImage] = useState(Tiger);
  const [displayAlert,setDisplayAlert]=useState('')
  const changeImage = () => {
    if (image === Tiger) {
      setImage(Tiger2);
      setDisplayAlert(false)
      
    }
    else {
      setImage(Tiger);
      setDisplayAlert(false)
    }
    
  }
  
  return (
    <>
      <div style={{ border: '2px solid green', backgroundColor: `${mode === 'dark' ? 'dimgrey' : 'lavender'}`, color: `${mode === 'dark' ? 'white' : 'black'}` }}>
        <img src={image} alt='Tiger' /><br />
        {/*<Button variant="danger" onChange={handleChange}>Click Now</Button>*/}
        <Button variant="info" style={{ margin: '10px' }} onClick={() => { changeImage(), setDisplayAlert(true) }}>
          Change Image
        </Button>
        {
          displayAlert ? <ItemAlert setDisplayAlert={setDisplayAlert}/>  : null
        }
      </div>
      <ButtonValue mode={mode} />
    </>
  )
}

export default Home