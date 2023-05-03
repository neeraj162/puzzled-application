// import { useNavigate, Link } from "react-router-dom";
import AdminBar from "./adminComp/AdminBar"
import Data from "./adminComp/Data"
import Answers from "./adminComp/Answers"
import AdStarter from "./adminComp/AdStarter";
import useAuth from '../hooks/useAuth';



const Admin = () => {
    const { admin } = useAuth();
    
    return (
        <>
            <AdminBar theme='dark' />
            {admin === 0 && <AdStarter />}
            {admin === 1 && <Data/>}
            {admin === 2 && <Answers />}
        </>
    )
}

export default Admin