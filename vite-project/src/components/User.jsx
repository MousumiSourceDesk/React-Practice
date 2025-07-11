import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import UserApi from './UserApi';


const User = ({ mode }) => {
  const [validated, setValidated] = useState(false);
  const [selectGender, SetSelectGender] = useState('');
  const [selectCondition, setSelectCondition] = useState('');
  const [checkedItem, setCheckedItem] = useState(false);
  const [selectCity,setSelectCity]=useState("");
  const [fName,setFname]= useState("")
  const [lName,setLname]= useState("")
  const [userName,setUserName]= useState("")

  const handleCheckedItem = (event) => {
    if (checkedItem) {
      setCheckedItem(event.target.value);
      setCheckedItem('true');
    }
    else {
      setCheckedItem(event.target.value);
      setCheckedItem('false');
    }

  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <div>
      <h1>User components show/hide by clicking display button on top</h1>
      <Row className='m-3'>
        <Container className='justify-content-md-center p-3' as={Col} style={{ border: '2px solid midnightblue', width: '75%', margin: 'auto', justifyContent: 'center', backgroundColor: `${mode === 'dark' ? 'darkkhaki' : 'ghostwhite'}`, color: `${mode === 'dark' ? 'white' : 'black'}` }}  >
        <Form noValidate validated={validated} onSubmit={handleSubmit} color="yellow">
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
                value={fName}
                onChange={(event)=>{setFname(event.target.value)}}  
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
                value={lName}
                onChange={(event)=>{setLname(event.target.value)}}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                  value={userName}
                  onChange={(event)=>{setUserName(event.target.value)}}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label><br/>
              <select className="form-select form-select-md" onChange={(event)=>{setSelectCity(event.target.value)}} required>
                <option disabled selected value={""}>Select city....</option>
                <option value={"West Bengal"}>West Bengal</option>
                <option value={"Bihar"}>Bihar</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
              </select>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Gender</Form.Label><br />
              <Form.Check required inline type="radio" label="Male" name='gender' value={'Male'} onChange={(event) => { SetSelectGender(event.target.value) }} checked={selectGender === 'Male'} feedback="You must have select gender"
                feedbackType="invalid" />
              <Form.Check required inline type="radio" label="Female" name='gender' value={'Female'} onChange={(event) => { SetSelectGender(event.target.value) }} checked={selectGender === 'Female'} />
            </Form.Group>
          </Row>
          <Form.Group>
            <Form.Check  className="my-4"
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
              value={'You have to agree my system'} onChange={(event) => { setSelectCondition(event.target.value), handleCheckedItem(event) }} checked={checkedItem}
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
        <h1>Your Gender is : {selectGender}</h1>
        <h1>Condition: {selectCondition} </h1>
        <h1>City: {selectCity}</h1>
      </Container>
      
      <Container as={Col}>
        <UserApi fName={fName} lName={lName} userName={userName}/>
      </Container>
      </Row>
    </div>
  )
}

export default User