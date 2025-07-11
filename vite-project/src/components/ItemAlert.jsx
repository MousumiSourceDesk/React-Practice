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
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Cfvdff.fdfdfcvcvc
        </p>
      </Alert>
    );
  }
}

export default ItemAlert;