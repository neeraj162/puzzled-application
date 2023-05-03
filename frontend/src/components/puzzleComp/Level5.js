import React from 'react'
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import styles from './Styling/styles';
import card from './Styling/card';
import search from './Styling/search';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useBeforeUnload } from './Styling/effect.js';

export default function Level5() {
    const buttonRef = useRef(null);
    const [ans, setAns] = useState('');
    const { setLevel, path, setPath, timeStamps, setTimeStamps, attempts, setAttempts } = useAuth();
    useBeforeUnload(() => {
    });
    const handleclick = (e) => {
        e.preventDefault();
        if (ans.toLowerCase() === 'slytherin') {
            const newTimeStamp = Date.now();
            setTimeStamps([...timeStamps, newTimeStamp]);

            setLevel(6);
            setPath([...path, 5]);

        }
        else {
            setLevel(7);
            setPath([...path, 5]);
        }
        let newarray = attempts;
        newarray[4] = newarray[4] + 1;
        setAttempts([...newarray]);
    }
    const handlePrevious = () => {
        timeStamps.pop();
        setTimeStamps([...timeStamps]);

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
                {/* <h1>Level-5</h1> */}
                <h3 style={{ fontFamily: 'HARRYP_', fontSize: '45px' }}> Solve the puzzle and decode the next clue. </h3>

                <Link to="https://puzzel.org/en/jigsaw/play?p=-NUI4ENzJbwnyczikSmQ" target="_blank" rel='noreferrer'>
                    <button className='btn btn-outline-dark'>View Puzzle</button>
                </Link>

                <form onSubmit={handleclick} style={{ display: 'flex', marginTop: '70px', flexDirection: 'column', alignItems: 'center' }}>
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
