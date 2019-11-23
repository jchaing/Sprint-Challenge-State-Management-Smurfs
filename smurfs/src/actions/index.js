import axios from 'axios';

export const SMURFS_LOAD_START = 'SMURFS_LOAD_START';
export const SMURFS_LOAD_SUCCESS = 'SMURFS_LOAD_SUCCESS';
export const SMURFS_LOAD_FAILURE = 'SMURFS_LOAD_FAILURE';
export const SMURF_ADD_SUCCESS = 'SMURF_ADD_SUCCESS';

export const getSmurfs = () => dispatch => {
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log('getSmurfs ACTION', res.data);
      dispatch({
        type: SMURFS_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SMURFS_LOAD_FAILURE,
        payload: 'error loading data'
      });
    });
};
