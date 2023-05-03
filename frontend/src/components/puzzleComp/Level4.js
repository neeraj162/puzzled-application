import React from 'react'
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import styles from './Styling/styles';
import card from './Styling/card';
import search from './Styling/search';
import { useRef } from 'react';
import { useBeforeUnload } from './Styling/effect.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons'
const image = require('../puzzleComp/img/puzzle.png');

export default function Level4() {
    const buttonRef = useRef(null);
    const [ans, setAns] = useState('');
    const { setLevel, path, setPath, timeStamps, setTimeStamps, attempts, setAttempts } = useAuth();
    useBeforeUnload(() => {
    });
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            buttonRef.current.click();
        }
    }
    const handleclick = (e) => {
        e.preventDefault();
        if (ans === '164') {
            const newTimeStamp = Date.now();
            setTimeStamps([...timeStamps, newTimeStamp]);

            setLevel(5);
            setPath([...path, 4])
        }
        else {
            setLevel(9);
            setPath([...path, 4])
        }
        let newarray = attempts;
        newarray[3] = newarray[3] + 1;
        setAttempts([...newarray]);
    }
    const handlePrevious = () => {
        timeStamps.pop();
        setTimeStamps([...timeStamps]);

        const prev = path.pop();
        setPath([...path]);
        setLevel(prev);
    }
    return (
        <div style={styles}>
            <div style={card}>
                {/* <h1>Level-4</h1> */}
                <div>
                    <img src={image} alt='' style={{ userSelect: 'none', pointerEvents: "none", width: '450px', height: '250px' }} />
                </div>

                <form onSubmit={handleclick} style={{ display: 'flex', marginTop: '20px', flexDirection: 'column', alignItems: 'center' }}>
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
