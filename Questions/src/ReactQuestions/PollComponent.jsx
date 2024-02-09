import React, { useState, useRef } from 'react';

const PollComponent = () => {
    const[countA, setCountA] = useState(0);
    const calculateVote = ()=>{
        setCountA(countA+1);
    }
  return(
    <>
    <button onClick={calculateVote}>Click Option A {countA}</button>
    <button>Click Option B</button>
    <button>Click Option C</button>
    <button>Click Option D</button>
    </>
  )
};

export default PollComponent;
