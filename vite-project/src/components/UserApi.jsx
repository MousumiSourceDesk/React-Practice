import React from 'react'
import Table from 'react-bootstrap/Table';
//import in User.jsx

const UserApi = ({ fName, lName, userName }) => {
    //api
    const userData = [
        {
            userName: "abc",
            userEmail: 'xyz@gmail.com',
            userAge: "58"
        },
        {
            userName: "abc",
            userEmail: 'xyz@gmail.com',
            userAge: "58"
        },
        {
            userName: "abc",
            userEmail: 'xyz@gmail.com',
            userAge: "58"
        },
        {
            userName: "abc",
            userEmail: 'xyz@gmail.com',
            userAge: "58"
        }
    ]
    return (
        <>
            <div className='m-3'>
                <h1>Data from User.jsx Form</h1>
                <Table bordered hover style={{ borderColor: "red" }} responsive>
                    <thead bg="red">
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{fName}</td>
                            <td>{lName}</td>
                            <td>{userName}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <h1>Data collect form userData array api</h1>
                <Table bordered hover boolean responsive>{/*boolean use for table border*/}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((user) => (
                                <tr>
                                    <td>{user.userName}</td>
                                    <td>{user.userEmail}</td>
                                    <td>{user.userAge}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default UserApi