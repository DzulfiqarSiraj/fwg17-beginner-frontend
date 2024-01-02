import React from "react";
import {Navigate} from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const PrivateRoot = ({children}) => {
    const [token, setToken] = React.useState(window.localStorage.getItem('token'))
    if(token){
        return (

        <>{children}</>
        )
    } else {
        return (
            <Navigate to='/login' />
        )
    }

}

export default PrivateRoot