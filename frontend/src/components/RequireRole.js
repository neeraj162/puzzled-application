import { useLocation, Navigate, Outlet } from "react-router-dom";

const RoleToRoute = {
    'user': '/',
    'admin': '/admin'
}

const RequireRole = ({allowedRole, notAllowed}) => {
    const location = useLocation();
    return (
        localStorage.getItem('role') === allowedRole ? <Outlet /> :
            <Navigate to={RoleToRoute[notAllowed]} state={{ from: location }} replace />
    );
}

export default RequireRole;