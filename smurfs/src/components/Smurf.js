import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const Smurf = props => {
  console.log('SMURF PROPS', props);
  console.log('SMURF', props.smurf);

  const deleteSmurf = e => {
    e.preventDefault();
    console.log('SMURF DELETED', props.smurf.id)
    props.deleteSmurf(props.smurf.id);
  };

  return (
    <div onClick={deleteSmurf}>
      <h2>Name: {props.smurf.name}</h2>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return { state };
};

export default connect(mapStateToProps, { deleteSmurf })(Smurf);
