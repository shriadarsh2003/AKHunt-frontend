import { useState, useEffect } from 'react';
import UserTable from './UserTable';
import axios from 'axios';
import { useAuth } from '../../context/auth.js';
import PageNotFoundGIF from '../../images/pgnf.gif';

export default function Leaderboard() {
    const [users, setUsers] = useState([]);
    const [auth, setAuth] = useAuth();
    const getUsers = async () => {
        try{
            const res = await axios.get(`${process.env.REACT_APP_API}/getAllUsers`);
            setUsers(res.data);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getUsers();
    }, []);

    return auth?.user?.role===1 ? (
        <UserTable users={users} />
    ) : (
        <div className="d-flex justify-content-center align-items-center" style={{height: "90vh"}}>
            {/* <h3> Error 404!! Page Not Found </h3> */}
            <img src={PageNotFoundGIF} alt="PageNotFound" style={{height: "100%", width:"80%"}}/>
        </div>
    )
}