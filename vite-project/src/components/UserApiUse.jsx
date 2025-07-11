import React from 'react'
import Table from 'react-bootstrap/Table';

const UserApiUse = ({data}) => {
    return (
        <>
            <div>
                <Table bordered hover boolean responsive>{/*boolean use for table border*/}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.userName}</td>
                            <td>{data.userEmail}</td>
                            <td>{data.userAge}</td>
                        </tr>
                    </tbody>
                </Table>
            </div >
        </>

    )
}
export default UserApiUse