import React, {useEffect} from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/';

const Smurfs = props => {
  console.log('SMURFS PROPS', props);

  useEffect(() => {
    props.getSmurfs();
  }, [])

  return (
    <div>
      <h2>Smurf List</h2>
      {props.state.map(smurf => (
        <Smurf key={smurf.id} smurf={smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, {getSmurfs})(Smurfs);
