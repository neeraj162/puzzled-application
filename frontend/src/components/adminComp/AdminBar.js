import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
const image = require('../../mainlogo2.png');

export default function AdminBar() {
    const location = useLocation();
    const {setAdmin} = useAuth();
    const navigate = useNavigate();
    const logout = async () => {
        
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/login');
        setAdmin(0);
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme='dark'>
            <div className="container-fluid">
                <img
                    src={image}
                    height="30"
                    alt="MDB Logo"
                    loading="lazy"
                    style={{ "marginTop": "-1px" }}
                />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-3" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/admin' ? "active": ""}`} onClick={()=>{setAdmin(0)}} style={{fontSize:'20px'}} aria-current="page" to="/admin">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/admin/dashboard' ? "active": ""}`} onClick={()=>{setAdmin(1)}} style={{fontSize:'20px'}} aria-current="page" to="/admin/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/admin/answers' ? "active": ""}`}  onClick={()=>{setAdmin(2)}} style={{fontSize:'20px'}} to="/admin/answers">Answers</Link>
                        </li>
                    </ul>
                    <span className="navbar-text" style={{color:'white', fontSize:'20px'}}>
                        Hello Admin,
                    </span>
                    <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-link px-3 me-2" style={{ "color": "white",fontSize:'20px' }} onClick={logout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
