import React from 'react'
import useAuth from '../../hooks/useAuth';
import styles from './Styling/styles';
import card from './Styling/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { useBeforeUnload } from './Styling/effect.js';

export default function Side1() {
    const { setLevel, path, setPath } = useAuth();
    useBeforeUnload(() => {
    });
    const handleclick = (e) => {
        e.preventDefault();
        setLevel(8);
        setPath([...path, 7]);
    }
    const handlePrevious = () => {
        const prev = path.pop();
        setPath([...path]);
        setLevel(prev);
    }
    return (
        <div style={styles}>
            <div style={card}>
                {/* <h1>Side-1</h1> */}
                <h3 style={{ fontFamily: 'HARRYP_', fontSize: '45px' }}> There is hidden Link in this box other than previous button. </h3>
                <h6 style={{ fontFamily: 'HARRYP_', fontSize: '30px' }}>Hint: Try selecting items </h6>

                <a href='/#' onClick={handleclick} style={{ marginTop: '30px', marginBottom: '50px', color: 'transparent', overflow: 'hidden' }}>dsfa</a>



                <button className='btn btn-dark' onClick={handlePrevious}><FontAwesomeIcon icon={faBackward} style={{ color: "#ffffff", }} /> Previous</button>
            </div>
        </div>
    )
}
