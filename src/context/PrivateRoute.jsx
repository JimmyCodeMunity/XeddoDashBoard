import { useState } from 'react';
import { Navigate,Outlet } from 'react-router-dom'

const PrivateRoutes =()=> {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') !== null);

    const handleLogout = () => {
        // Perform logout actions, such as clearing token from localStorage
        localStorage.removeItem('token');
        setLoggedIn(false);
        console.log("user logged out")
    };

    const handleClicked = () =>{
        console.log("button clicked")
      }
    console.log('status',loggedIn)
    // let auth = {'token':false}
    let auth = { token: localStorage.getItem('token') };
    console.log('status',auth)
  return (
    auth.token ? <Outlet loggedIn={loggedIn}/> : <Navigate to="/login"/>
  )
}

export default PrivateRoutes