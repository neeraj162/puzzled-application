import React from 'react'
import Navbar from './Navbar'
import { useState, useEffect } from 'react';
import axios from '../../api/axios';
import '../../css/leaderboard.css'
const UPDATE_URL = '/game/leaderboard'

export default function LeaderBoard() {
    const [fulldata, setFulldata] = useState([]);
    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get(UPDATE_URL);
            const data = response.data;
            // console.log(data);
            setFulldata(data);
        }
        fetchdata();
    }, [])
    return (
        <>
            <Navbar />


            <div className='demo' style={{minHeight: 'calc(100vh - 62px)', backgroundColor:'black'}}>


                <div className="container d-flex justify-content-center" style={{paddingTop:'100px'}}>
                    <div className="row">
                        <div className="col-md-offset-1 col-md-10">
                            <div className="panel">
                                <div className="panel-heading">
                                    <h4 className='title'>Leaderboard</h4>
                                </div>
                                <div className="panel-body table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Rank</th>
                                                <th>Name</th>
                                                <th>Score</th>
                                                <th>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {fulldata.map((userd, i) => (
                                                <tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td>{userd.name}</td>
                                                    <td>{userd.final_score}</td>
                                                    <td>{userd.total_time}s</td>

                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
