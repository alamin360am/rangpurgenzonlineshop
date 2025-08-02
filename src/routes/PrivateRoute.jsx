import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import FullPageLoader from "../pages/FullPageLoader";

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useContext(UserContext);
    const location = useLocation();

    if(isLoading) {
        return <FullPageLoader />
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