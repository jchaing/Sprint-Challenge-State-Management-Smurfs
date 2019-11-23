import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const SmurfForm = props => {
  console.log('SMURFFORM', props);
  const [newSmurf, setNewSmurf] = useState({});

  const handleName = e => {
    setNewSmurf({ ...newSmurf, name: e.target.value });
  };

  const handleAge = e => {
    setNewSmurf({ ...newSmurf, age: e.target.value });
  };

  const handleHeight = e => {
    setNewSmurf({ ...newSmurf, height: e.target.value });
  };

  const addSmurf = e => {
    e.preventDefault();
    console.log('ADDED SMURF', newSmurf);
    props.addSmurf({ ...newSmurf, id: props.state.length });
    setNewSmurf({ name: '', age: '', height: '' });
  };

  return (
    <form action="">
      <input placeholder='name' onChange={handleName} value={newSmurf.name} />
      <input placeholder='age' onChange={handleAge} value={newSmurf.age} />
      <input placeholder='height' onChange={handleHeight} value={newSmurf.height} />
      <button onClick={addSmurf}>Add Smurf</button>
    </form>
  );
};

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
