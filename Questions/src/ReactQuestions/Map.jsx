import React from 'react';

const NumberList = ({ numbers }) => {
  const doubledNumbers = numbers.map((num) => <li key={num}>{num * 2}</li>);

  return <ul>{doubledNumbers}</ul>;
};

const Map = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <h2>Doubled Numbers:</h2>
      <NumberList numbers={numbers} />
    </div>
  );
};

export default Map;
