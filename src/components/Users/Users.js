import React from 'react';
import './User.css';

const Users = (props) => {
    return (
        <div className="users-img">
            <img src={props.user.picture.large} alt="" />
        </div>
    );
};

export default Users;