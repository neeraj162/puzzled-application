import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import '../../css/finish.css'
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
const UPDATE_URL = '/game/update';


export default function Finish() {
    const { timeStamps, attempts, deadends, setLevel, setPath, setTimeStamps, setAttempts, setDeadends, result, setResult, setHint1, setHint2 } = useAuth();
    const [clues, setClues] = useState([]);
    const [total_time, setTotal_time] = useState('')
    const [final_score, setFinal_score] = useState(0);

    const navigate = useNavigate();

    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(seconds).padStart(2, "0");
        return `${formattedMinutes}:${formattedSeconds}`;
    }



    useEffect(() => {
        const handleResult = () => {
            // calculate data
            let totalTime = 0, finalScore = 0;
            let times = []
            let scores = []
            let evaluation = [20, 60, 150, 40, 180];
            for (let index = 1; index < timeStamps.length; index++) {
                const diff = Math.abs(timeStamps[index - 1] - timeStamps[index]);
                let seconds = Math.floor(diff / 1000);
                const val = formatTime(seconds);
                totalTime = totalTime + seconds;
                let score = Math.max(30, 100 - (attempts[index - 1] - 1) * 5);
                score = Math.max(30, score - Math.floor(Math.max(0, seconds-evaluation[index-1])/5));
                scores.push(score);
                finalScore = finalScore + score;
                times.push(val);
            }

            totalTime = formatTime(totalTime);


            let description = ['Riddle', 'Map puzzle', 'Video puzzle', 'Code puzzle', 'Jigsaw puzzle'];
            let clues_found = []
            for (let index = 0; index < attempts.length; index++) {
                let obj = {
                    'clue_id': index + 1,
                    'description': description[index],
                    'time': times[index],
                    'attempts': attempts[index],
                    'score': scores[index]
                }
                clues_found.push(obj);

            }

            setTotal_time(totalTime);
            setFinal_score(Math.floor(finalScore / 5));
            setClues([...clues_found]);

        }

        handleResult();
    }, [timeStamps, attempts, deadends]);

    const viewResult = async (e) => {
        setResult(true);

        e.preventDefault();
        const response = await axios.post(UPDATE_URL, JSON.stringify({ solution_found: true, total_time, final_score, clues_found: clues, dead_ends: deadends }),
            {
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem('token')
                },

            }
        );
       
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setPath([]);
        setTimeStamps([]);
        setAttempts([0, 0, 0, 0, 0]);
        setDeadends(0);
        setHint1(false);
        setHint2(false);
        setLevel(0);
        setResult(false);
        navigate('/');
        
    }


    return (
        <div className='finish_body'>
            <div className="finish_root">
                <div className="finish_container py-3">
                    <div className="finish_center">
                        <h1 style={{ fontFamily: 'HARRYP_', fontSize: '50px' }}> Congratulations, you've just won the internet by solving this puzzle! </h1>
                        {!result &&
                            <button className='btn finish_button' onClick={viewResult}>View Result</button>
                        }
                        {result &&
                            <>
                                <div>
                                    <table className="table table-borderless finish_table">
                                        <thead>
                                            <tr>

                                                <th scope="col">Clue</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Time Taken</th>
                                                <th scope="col">Attempts</th>
                                                <th scope="col">Score</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table-group-divider">

                                            {clues.map((clue) => (
                                                <tr key={clue._id}>
                                                    <td>{clue.clue_id}</td>
                                                    <td>{clue.description}</td>
                                                    <td>{clue.time}</td>
                                                    <td>{clue.attempts}</td>
                                                    <td>{clue.score}</td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>


                                </div>
                                <div className='finish_results'>
                                    <h3>Total Time taken: <span>{total_time}s</span></h3>
                                    <h3>Final Score: <span>{final_score}</span>/100</h3>
                                </div>
                                <button className='btn finish_result_button' onClick={handleSubmit}>Home</button>

                            </>
                        }
                        
                    </div>

                </div>
            </div>

        </div>
    )
}
