import React from 'react'
import { Link } from 'react-router-dom'
import AdminBar from './AdminBar';
const image = require('../puzzleComp/img/puzzle.png');

export default function Answers() {
    return (
        <>
            <AdminBar />
            <div className="container my-5">
                <h2>Clue Answers</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Clue #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Description: <strong>Riddle</strong> </p>

                                <p>
                                    Question: <strong>"The code is different everyday, but I wont tell you one."</strong>
                                </p>
                                <p>
                                    Hint: <i>Answer is in the above statement.</i>
                                </p>

                                <p>
                                    Answer: The code is <code>different</code>
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Clue #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Description: <strong>Map Puzzle</strong> </p>

                                <p>
                                    Question: <strong>"Your Clue is the 'color' which represents a castle in the map."</strong>
                                </p>

                                <p>
                                    Link: <Link to='http://quartermaester.info' target='_blank' style={{ color: "#0c9fce" }}> Map link </Link>
                                </p>
                                <p>
                                    Hint: <i>Somewhere in the North(direction)</i>
                                </p>

                                <p>
                                    Answer: The castle which has color in its name is Castle Black, so the answer is  <code>black</code>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Clue #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Description: <strong>Video Puzzle</strong> </p>

                                <p>
                                    Question: <strong>Who paid the debt? </strong>
                                </p>

                                <p>
                                    Link: <Link to='https://www.youtube.com/watch?v=hhsil10khU4' target='_blank' style={{ color: "#0c9fce" }}> Video link </Link>
                                </p>

                                <p>
                                    Answer: In the video , it is mentioned that <code>thomas</code> paid the debt.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Clue #4
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Description: <strong>Code Puzzle</strong> </p>

                                <p>
                                    Question:
                                </p>
                                <img src={image} alt='' style={{ userSelect: 'none', pointerEvents: "none", width: '450px', height: '250px' }} />
                                <br />
                                <br />

                                <p>
                                    Answer: From first two rules, it is clear that 6 is in correct position and 3,7,8 are not in the code. From last rule it is clear that the 1 and 4 are exchanged, so the code is  <code>164.</code>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Clue #5
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Description: <strong>Jigsaw Puzzle</strong> </p>

                                <p>
                                    Question: <strong>Solve the Jigsaw puzzle to find the clue. </strong>
                                </p>

                                <p>
                                    Link: <Link to='https://puzzel.org/en/jigsaw/play?p=-NUI4ENzJbwnyczikSmQ' target='_blank' style={{ color: "#0c9fce" }}> Puzzle link </Link>
                                </p>

                                <p>
                                    Answer: After solving it is clear that the clue is  <code>SLYTHERIN</code>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                DeadEnds and Side Clues
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>
                                    Puzzles other than above are just for divertion, there is no true validation to those clues.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
