import {
  SMURFS_LOAD_START,
  SMURFS_LOAD_SUCCESS,
  SMURFS_LOAD_FAILURE,
  SMURF_ADD_SUCCESS
} from '../actions';

const initialState = [];

export const reducer = (state = initialState, action) => {
  console.log('REDUCER STATE', state);
  switch (action.type) {
    case SMURFS_LOAD_SUCCESS:
      return [...state, ...action.payload];
    case SMURF_ADD_SUCCESS:
      console.log('ACTION.PAYLOAD ADD', action.payload)
      return [...state, action.payload]
    default:
      return state;
  }
};
