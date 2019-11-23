import axios from 'axios';

export const SMURFS_LOAD_START = 'SMURFS_LOAD_START';
export const SMURFS_LOAD_SUCCESS = 'SMURFS_LOAD_SUCCESS';
export const SMURFS_LOAD_FAILURE = 'SMURFS_LOAD_FAILURE';
export const SMURF_ADD_SUCCESS = 'SMURF_ADD_SUCCESS';
export const SMURF_ADD_FAILURE = 'SMURF_ADD_FAILURE';

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

export const addSmurf = smurf => dispatch => {
  console.log('addSmurf smurf param', smurf)
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log('POST', res.data);
      dispatch({
        type: SMURF_ADD_SUCCESS,
        payload: smurf
      });
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: SMURF_ADD_FAILURE,
        payload: 'error adding data'
      })
    });
};

// export const deleteSmurf = id => dispatch => {
//   axios
//     .delete(`http://localhost:3333/smurfs/${id}`)
//     .then(res => {
//       console.log('DELETE', res)
//     })
//     .catch(err => {
//       console.log('ERROR DELETE', err);
//     })
// }
