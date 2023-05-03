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

export default function Level3() {
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
        if (ans.toLowerCase() === 'thomas' || ans.toLowerCase() === 'thomas gates') {
            const newTimeStamp = Date.now();
            setTimeStamps([...timeStamps, newTimeStamp]);

            setLevel(4);
            setPath([...path, 3])
        }
        else if (ans.toLowerCase() === 'men') {
            setLevel(9);
            setPath([...path, 3])
        }
        else {
            setLevel(7);
            setPath([...path, 3])
        }
        let newarray = attempts;
        newarray[2] = newarray[2] + 1;
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
                {/* <h1>Level-3</h1> */}
                <h3 style={{ fontFamily: 'HARRYP_', fontSize: '45px' }}> Who paid the debt? </h3>

                <iframe width='525' height='300' src="https://www.youtube.com/embed/hhsil10khU4" title="National Treasure: Book of Secrets - The Debt That All Men Pay (HD)"></iframe>
                <form onSubmit={handleclick} style={{ display: 'flex', flexDirection: 'column', marginTop: '15px', alignItems: 'center' }}>
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
