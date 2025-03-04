import React,{ReactNode} from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

interface Protected{
    children:ReactNode
}

const ProtectedRoute:React.FC<Protected> = ({children}) => {
    // const user = useSelector((state:any) => state.user);
    const token = localStorage.getItem('auth');



    let location = useLocation();
    console.log(token)

    if(!token) {
        return <Navigate to="/auth/signin" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;