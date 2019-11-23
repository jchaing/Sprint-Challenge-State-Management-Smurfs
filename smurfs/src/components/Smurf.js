import React from 'react';

const Smurf = ({ smurf }) => {
  return (
    <div>
      <h2>Name: {smurf.name}</h2>
      <p>Age: {smurf.age}</p>
      <p>Height: {smurf.height}</p>
    </div>
  );
};

export default Smurf;
