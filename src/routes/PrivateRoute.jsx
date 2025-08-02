import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/AuthContext";

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useContext(UserContext);
    const location = useLocation();

    if(isLoading) {
        return <h1 className="loading">Loading</h1>
    }

    if (user && !user.verified) {
        return <Navigate to={'/verify-otp'}></Navigate>;
    }

    if (user && user.verified) {
        return children;
    }

    return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoute;