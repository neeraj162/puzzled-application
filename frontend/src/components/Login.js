import React from 'react'
import { useRef, useState, useEffect } from 'react'
import axios from '../api/axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../css/auth.css';

const LOGIN_URL = '/auth/login';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);




    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email: email, password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            const accessToken = response?.data?.authToken;
            const role = response?.data?.role;

            setEmail('');
            setPwd('');
            localStorage.setItem('token', accessToken);
            localStorage.setItem('role', role);
            localStorage.setItem('name', response?.data?.name);
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Incorrect Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
        finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            {isLoading &&
                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height:'5px'}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "75%"}}></div>
                </div>
            }


            <div className="App">

                <div className='main'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className='h1'>Login</h1>
                    <form onSubmit={handleSubmit} className='form'>
                        <label className='label' htmlFor="email">
                            Email:
                        </label>
                        <input
                            className='input'
                            type="email"
                            id="email"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />

                        <label className='label' htmlFor="password">Password:</label>
                        <input
                            className='input'
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button className='button'>Log In</button>

                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            <Link to="/register">Sign Up</Link>
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login