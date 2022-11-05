import React, {useEffect, useState} from "react";

import { useParams } from "react-router-dom";

const UserPage = () => {

    const params = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(response => response.json())
            .then(json => setUser(json));

        if (user) {
            setLoading(false);
        }


    })
    
    return (
        (loading ? <h3>Loading...</h3> : 
            (<div>
                <h1>Details for {user.name}</h1>
                <h4>Email</h4>
                <p>{user.email}</p>
                <h4>Address</h4>
                <p>
                    {user.address.street}<br/>
                    {user.address.suite}<br/>
                    {user.address.city}<br/>
                    {user.address.zipcode}
                </p>
            </div>
        ))
    )
    
}

export default UserPage