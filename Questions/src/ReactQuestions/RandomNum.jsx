//Here is the random number generator
import { useState } from 'react';
function RandomNum(){
    const [startRange, setStartRange] = useState('');
  const [endRange, setEndRange] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleStartRangeChange = (event) => {
    setStartRange(event.target.value);
  };

  const handleEndRangeChange = (event) => {
    setEndRange(event.target.value);
  };

  const handleGenerateRandomNumber = () => {
    const start = parseInt(startRange);
    const end = parseInt(endRange);

    if (isNaN(start) || isNaN(end) || start === '' || end === '') {
      setErrorMessage('Invalid Input');
      setRandomNumber(null);
    } else {
      const randomNum = Math.floor(Math.random() * (end - start + 1)) + start;
      setRandomNumber(randomNum);
      setErrorMessage('');
    }
  };

  return (
    <div>
      <label>
        Starting Range:
        <input type="number" id="startRange" value={startRange} onChange={handleStartRangeChange} />
      </label>
      <br />
      <label>
        Ending Range:
        <input type="number" id="endRange" value={endRange} onChange={handleEndRangeChange} />
      </label>
      <br />
      <button id="generate" onClick={handleGenerateRandomNumber}>
        Generate Random Number
      </button>
      <br />
      <div id="randomNumber">
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        {randomNumber !== null && <p>Generated Number: {randomNumber}</p>}
      </div>
    </div>
  );
}

export default RandomNum;