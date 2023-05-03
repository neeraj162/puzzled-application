import React from 'react'
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import styles from './Styling/styles';
import card from './Styling/card';
import search from './Styling/search';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { useBeforeUnload } from './Styling/effect.js';

export default function Side0() {
    const buttonRef = useRef(null);
    const [ans, setAns] = useState('');
    const { setLevel, path, setPath } = useAuth();
    useBeforeUnload(() => {
    });
    const handleclick = (e) => {
        e.preventDefault();
        if (ans.toLowerCase() === 'meena') {
            setLevel(10);
            setPath([...path, 9]);
        }
        else {
            setLevel(10);
            setPath([...path, 9]);
        }
    }
    const handlePrevious = () => {
        const prev = path.pop();
        setPath([...path]);
        setLevel(prev);
    }
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            buttonRef.current.click();
        }
    }
    return (
        <div style={styles}>
            <div style={card}>
                {/* <h1>Side-0</h1> */}
                <h3 style={{ fontFamily: 'HARRYP_', fontSize: '45px' }}>Meena's mother has five daughters: Reena, Teena, Sheena and Sheela. Who is the fifth daughter? </h3>
                <form onSubmit={handleclick} style={{ marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input type="text"
                        onKeyDown={handleKeyPress}
                        style={search}
                        id="text"
                        onChange={(e) => setAns(e.target.value)}
                        value={ans}
                        required />
                    <div>
                        <button className='btn btn-dark' onClick={handlePrevious}><FontAwesomeIcon icon={faBackward} style={{ color: "#ffffff", }} /> Previous</button>
                        <button className='btn btn-dark mx-3' ref={buttonRef} type='submit'>Next <FontAwesomeIcon icon={faBackward} rotation={180} style={{ color: "#fcfcfc", }} /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
