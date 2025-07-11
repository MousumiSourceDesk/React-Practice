import React from 'react'
import Table from 'react-bootstrap/Table';
import UserApiUse from './UserApiUse';
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
                <h2>Get data from UserApiUse.jsx</h2>
                {
                    userData.map((userData) => (
                        <UserApiUse data={userData} />
                    ))
                }
            </div>
        </>
    )
}

export default UserApi