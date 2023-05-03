import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
const image = require('../../mainlogo2.png')

export default function Navbar() {
    const navigate = useNavigate();
    const logout = async () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/login');
    }
    const location = useLocation();
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
                            <Link className={`nav-link ${location.pathname==='/' ? "active": ""}`} style={{fontSize:'20px'}} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/dashboard' ? "active": ""}`} style={{fontSize:'20px'}} aria-current="page" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==='/leaderboard' ? "active": ""}`} style={{fontSize:'20px'}} to="/leaderboard">Leaderboard</Link>
                        </li>
                    </ul>
                    <span className="navbar-text" style={{color:'white', fontSize:'20px'}}>
                        Hello {localStorage.getItem('name')},
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
