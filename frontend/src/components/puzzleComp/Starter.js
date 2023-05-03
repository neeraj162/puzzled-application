import React from 'react'
import bgimg from "./img/bgstarter3.jpg";
import { useNavigate } from 'react-router-dom';

export default function Starter() {
    const navigate = useNavigate();
    const styles = {
        backgroundImage: `url(${bgimg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: 'calc(100vh - 62px)'
    };
    const buttonstyles = {
        marginTop: "30px",
        padding: "10px 20px",
        fontSize: "20px",
        fontWeight: "bold",
    }
    const heading = {
        marginTop: "100px",
        color: 'rgb(251, 202, 0)', 
        fontFamily: 'HARRYP_', 
        fontSize: '70px',
    }


    const handleClick=()=>{
        
        navigate('/puzzle');
    }
    return (
        <>
            <div style={styles} className="d-flex flex-column justify-content-center align-items-center">
                <h1  style={heading}>Ready to Conquer the quest?</h1>
                <button className='btn btn-outline-light' style={buttonstyles} onClick={handleClick}>Play</button>
            </div>
        </>
    )
}
