import React from 'react'

const ItemProps = ({ userObject }) => {
    return (
        <div>
            {/* value passing asa object from ButtonValue.jsx*/}
            <h1>{userObject.name}</h1>
            <p>{userObject.age}</p>
            <p>{userObject.email}</p>
        </div>
    )
}

export default ItemProps