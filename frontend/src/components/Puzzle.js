import React from "react";
import Instructions from "./puzzleComp/Instructions";
import useAuth from '../hooks/useAuth';
import Level1 from "./puzzleComp/Level1";
import Level2 from "./puzzleComp/Level2";
import Level3 from "./puzzleComp/Level3";
import Level4 from "./puzzleComp/Level4";
import Level5 from "./puzzleComp/Level5";
import Finish from "./puzzleComp/Finish";
import Side1 from "./puzzleComp/Side1";
import Side2 from "./puzzleComp/Side2";
import DeadEnd from "./puzzleComp/DeadEnd";
import Side0 from "./puzzleComp/Side0";


const Puzzle = () => {
    const { level } = useAuth();
    

    return (
        <>
            {level === 0 && <Instructions />}
            {level === 1 && <Level1 />}
            {level === 2 && <Level2 />}
            {level === 3 && <Level3 />}
            {level === 4 && <Level4 />}
            {level === 5 && <Level5 />}
            {level === 6 && <Finish />}

            {level === 7 && <Side1 />}
            {level === 8 && <Side2 />}
            {level === 9 && <Side0 />}
            {level === 10 && <DeadEnd />}
        </>
    )
}
export default Puzzle;