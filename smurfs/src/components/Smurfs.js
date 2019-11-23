import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';

const Smurfs = props => {
  console.log('SMURFS PROPS', props);

  return (
    <div>
      <h2>Smurf List</h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, {})(Smurfs);
