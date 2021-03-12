import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState('');

    useEffect(() => {
        axios
        .get("http://localhost:4000/api/users")
        .then((response) => {
          setUsers(response.data);
        console.log(response.data);
        })
        .catch((error) => {
        console.error("Error al intentar mostrar los usuarios");
        });
    },[]);

    function onChangeUsername(e) {
        console.log(e.target.value);

    }

    return(
        <div className="row">
            <div className= "col-md-4">
                <div className="card card-body">
                    <h3>Create new user</h3>
                    <form>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control"
                                onChange={onChangeUsername}
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-8">
                <ul className="list-group">
                    {users.map(user => 
                        <li 
                            className="list-group-item list-group-item-action" 
                            key={user._id}
                        >
                            {user.username}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default CreateUser;