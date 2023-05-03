import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import useAuth from '../../hooks/useAuth';
import styles from './Styling/styles';
import card from './Styling/card';
import search from './Styling/search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { useBeforeUnload } from './Styling/effect.js';


export default function Level1() {
    const buttonRef = useRef(null);
    const [ans, setAns] = useState('');
    const { setLevel, path, setPath, timeStamps, setTimeStamps, attempts, setAttempts, hint1, setHint1 } = useAuth();
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
        if (ans.toLowerCase() === 'different') {
            const newTimeStamp = Date.now();
            setTimeStamps([...timeStamps, newTimeStamp]);

            setLevel(2);
            setPath([...path, 1]);


        }
        else {
            setLevel(9);
            setPath([...path, 1]);
        }
        let newarray = attempts;
        newarray[0] = newarray[0] + 1;
        setAttempts([...newarray]);
    }
    const handleHint = () => {
        setHint1(true);
        let newarray = attempts;
        newarray[0] = newarray[0] + 1;
        setAttempts([...newarray]);
    }
    return (
        <div style={styles}>
            <div style={card}>
                {/* <h1>Level-1</h1> */}

                <h3 style={{ fontFamily: 'HARRYP_', fontSize: '45px' }}> "The Code is different everyday, but I wont tell you one." </h3>
                <div style={{ marginTop: '40px' }}>
                    {!hint1 && <i>*Using hint might reduce your score <button className='btn btn-light btn-sm' onClick={handleHint}>Hint</button></i>}
                    {hint1 && <i>Hint: Answer is in the above statement.</i>}

                </div>

                <form onSubmit={handleclick} style={{ display: 'flex', marginTop: '70px', flexDirection: 'column', alignItems: 'center' }}>
                    <input
                        onKeyDown={handleKeyPress}
                        style={search}
                        type="text"
                        id="text"
                        onChange={(e) => setAns(e.target.value)}
                        value={ans}

                        required />

                    <button className='btn btn-dark mx-3' ref={buttonRef} type='submit'>Next <FontAwesomeIcon icon={faBackward} rotation={180} style={{ color: "#fcfcfc", }} /></button>

                </form>
            </div>
        </div>
    )
}
