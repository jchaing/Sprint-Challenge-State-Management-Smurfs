import {
  SMURFS_LOAD_START,
  SMURFS_LOAD_SUCCESS,
  SMURFS_LOAD_FAILURE,
  SMURF_ADD_SUCCESS
} from '../actions';

const initialState = [];

export const reducer = (state = initialState, action) => {
  console.log('REDUCER', state);
  switch (action.type) {
    case SMURFS_LOAD_SUCCESS:
      return [...state, ...action.payload];
  }
  return state;
};
