import React from 'react'
import useAuth from '../../hooks/useAuth';
import '../../css/deadend.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

export default function DeadEnd() {
    const { setLevel, path, setPath, deadends, setDeadends } = useAuth();

    const handlePrevious = () => {
        const prev = path.pop();
        setPath([...path]);
        setLevel(prev);
        const val=deadends;
        setDeadends(val+1);
    }
    return (
        <div className='deadbody'>
            <div className="text">
                <h1 style={{ fontFamily: 'HARRYP_', fontSize: '70px' }}> DEAD END</h1>
                <h2 style={{ fontFamily: 'HARRYP_', fontSize: '50px' }}> Expelliarmus</h2>
                <h3>Looks like you have reached deadend, You have collected wrong clues at any stage in this path, go back and verify every clue you collected.....</h3>
                <div className='d-flex justify-content-center mx-3 my-5'>
                    <button className='btn btn-light' onClick={handlePrevious}><FontAwesomeIcon icon={faBackward} /> Previous</button>  
                </div>

            </div>
        </div>
    )
}
