import React from 'react'
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useBeforeUnload } from './Styling/effect.js';

export default function Instructions() {
    const {setLevel, timeStamps, setTimeStamps} = useAuth();
    const [isChecked, setIsChecked] = useState(false);
    useBeforeUnload(() => {
    });
    const style = {
        padding: "200px 200px",
        backgroundColor: "black",
        color: 'white',
        height: '100vh',
        fontSize: '20px',
    }
    const handleClick= ()=>{
        const newTimeStamp = Date.now();
        setTimeStamps([...timeStamps, newTimeStamp]);
        
        setLevel(1)
        
    }
    return (
        <div style={style}>
            <h3 style={{fontFamily: 'HARRYP_', fontSize: '60px', marginBottom: '20px'}}>Things to keep in mind</h3>
            <ul>
                <li>Read the first clue carefully to figure out where to find the next clue.</li>
                <li>Use the clues to find the next clue or treasure.</li>
                <li>Some clues may lead to dead-ends, but don't give up! You may need to go back and try a different path.</li>
                <li>Use your creativity and problem-solving skills to solve any puzzles along the way.</li>
                <li>When you find the final clue, it will lead you to the treasure.</li>
                <li>Refreshing the page or going back to a page would restart the puzzle and progress would be lost</li>
                <li>Time taken to crack the clue and Accuracy will be determined.</li>
            </ul>
            <div>
                <label htmlFor="termsConditions">
                    <input
                        className='mx-2'
                        type="checkbox"
                        id="termsConditions"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        required
                    />
                    I have read the Instructions clearly.
                </label>
            </div>

            <button
                type="submit"
                className="btn btn-lg btn-outline-light my-3"
                disabled={!isChecked}
                onClick={handleClick}
            >
                Start
            </button>
        </div>
    )
}
