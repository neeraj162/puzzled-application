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

export default function Level2() {
    const buttonRef = useRef(null);
    const [ans, setAns] = useState('');
    const { setLevel, path, setPath, timeStamps, setTimeStamps, attempts, setAttempts, hint2, setHint2 } = useAuth();
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
        if (ans.toLowerCase() === 'black') {
            const newTimeStamp = Date.now();
            setTimeStamps([...timeStamps, newTimeStamp]);

            setLevel(3);
            setPath([...path, 2]);

        }
        else {
            setLevel(7);
            setPath([...path, 2]);
        }
        let newarray = attempts;
        newarray[1] = newarray[1] + 1;
        setAttempts([...newarray]);
    }
    const handlePrevious = () => {
        timeStamps.pop();
        setTimeStamps([...timeStamps]);

        const prev = path.pop();
        setPath([...path]);
        setLevel(prev);

    }
    const handleHint = () => {
        setHint2(true);
        let newarray = attempts;
        newarray[1] = newarray[1] + 1;
        setAttempts([...newarray]);
    }
    return (
        <div style={styles}>
            <div style={card}>
                {/* <h1>Level-2</h1> */}
                <h3 style={{ fontFamily: 'HARRYP_', fontSize: '40px' }}> Your Clue is the 'color' which represents a castle in the map. </h3>

                <Link to="http://quartermaester.info" target="_blank" rel='noreferrer'>
                    <button className='btn btn-outline-dark'>View map</button>
                </Link>
                <div style={{ marginTop: '40px' }}>
                    {!hint2 && <i>*Using hint might reduce your score <button className='btn btn-light btn-sm' onClick={handleHint}>Hint</button></i>}
                    {hint2 && <i>Hint: Somewhere in the North</i>}

                </div>

                <form onSubmit={handleclick} style={{ display: 'flex', marginTop: '50px', flexDirection: 'column', alignItems: 'center' }}>
                    <input
                        onKeyDown={handleKeyPress}
                        style={search}
                        type="text"
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
