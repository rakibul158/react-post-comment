import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';
import './Comments.css'

const Comments = (props) => {


    const [users, setUsers] = useState([]);
    const {name,email} = props.comment;

    useEffect(()=>{
        const url = `https://randomuser.me/api/?results=1`;
        fetch(url)
        .then(response =>response.json())
        .then(data =>setUsers(data.results));
    },[]);

    return (
        <div className="comments-details">
            <div className="user-img">
            {
                users.map(user => <Users key={user.id} user={user}></Users>)
            }
            </div>
            <div className="user-details">
                <p><strong>{name}</strong></p>
                <p><small>{email}</small></p>
            </div>

            
            
        </div>
    );
};

export default Comments;