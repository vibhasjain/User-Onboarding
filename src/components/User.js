import React from 'react';
import styled from 'styled-components';

const UserCard = styled.div`

    background:lightgray;
    padding: 40px;
    margin-top:20px;
`

export default function User(props) {
    const { name , email } = props.props;
    return (
        <UserCard>
            <h1>Name : {name}</h1>
            <h3>Email : {email}</h3>
        </UserCard>
    )
}