import React from 'react'
import AdminBar from './AdminBar';
import { useState, useEffect } from 'react';
import axios from '../../api/axios';
const UPDATE_URL = '/admin/fetch';

export default function Data() {
    // const isMounted = useRef(false);
    const [fulldata, setFulldata] = useState([]);
    useEffect(() => {
        // if (!isMounted.current) {
        //     isMounted.current = true;
        // } else {
        const fetchdata = async () => {
            const response = await axios.get(UPDATE_URL,
                {
                    headers: {
                        "auth-token": localStorage.getItem('token')
                    },

                }
            );
            const data = response.data;
            // console.log(localStorage.getItem('token'));
            // console.log(data);
            setFulldata(data);
        }
        fetchdata();

        // }
    }, [])
    return (
        <>
            <AdminBar />
            <div className='container my-5'>
                <h4>Game History</h4>
                <hr />
                {fulldata.length !== 0 &&
                    <div className="accordion" id="accordionExample">
                        {fulldata.map((userd, i) => (
                            <div className="accordion-item my-2" key={userd._id}>
                                <h2 className="accordion-header" id={`heading${i + 1}`}>
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i + 1}`} aria-expanded="true" aria-controls={`collapse${i + 1}`}>
                                        username:   <b style={{ display: 'block', marginLeft: '10px' }}>{userd.user.name}</b>,   email: <b style={{ display: 'block', marginLeft: '10px' }}>{userd.user.email}</b>
                                    </button>
                                </h2>
                                <div id={`collapse${i + 1}`} className="accordion-collapse collapse show" aria-labelledby={`heading${i + 1}`} data-bs-parent="#accordionExample">
                                    <div className="accordion-body bg-dark" style={{ color: 'white' }}>
                                        <div className="container">
                                            <p>Game data</p>
                                            <table className="table table-bordered" style={{ width: '70%', color: 'white' }}>
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

                                                    {userd.clues_found.map((clue) => (
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

                                            <div className='row'>
                                                <div className="col-3 text-start">
                                                    <p>Final Score: <span style={{ color: '#0cee0c' }}>{userd.final_score}</span>/100</p>
                                                </div>

                                                <div className="col-3 ">
                                                    <p>Total Time: <span style={{ color: '#0cee0c' }}>{userd.total_time}s</span></p>
                                                </div>
                                                <div className="col-3 ">
                                                    <p>Deadends Reached: <span style={{ color: '#ff0000' }}>{userd.dead_ends}</span></p>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                }
                {fulldata.length === 0 &&
                    <div>
                        <i style={{ fontSize: '20px' }}>Fetching your data...</i>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
