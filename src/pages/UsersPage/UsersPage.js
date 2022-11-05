import React, { useEffect, useState } from "react";

const UsersPage = () => {
   
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json));

        if(users) {
            setLoading(false) 
        }


    }, [users]);

    return(
        <div className="container">
            <h1>User List</h1>
            <div>
                {
                    (loading ? <h3>Loading...</h3> : users.map(user =>
                            <a key={user.id} href={`user/${user.id}`}><p>{user.name}</p></a>
                    ))
                }
            </div>
        </div>
    )
    
}

export default UsersPage