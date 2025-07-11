import { useState, useEffect  } from 'react';
import Alert from 'react-bootstrap/Alert';

const ItemAlert=({setDisplayAlert})=> {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setDisplayAlert(false);
      }, 1500); // Hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [show]);


  if (show) {
    return (
      <Alert variant="danger" onClose={() => {setShow(false)}} dismissible >
        <Alert.Heading>Button Click!</Alert.Heading>
        <p>
          Image Change Successfully..............
        </p>
      </Alert>
    );
  }
}

export default ItemAlert;