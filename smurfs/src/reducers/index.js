import {
  SMURFS_LOAD_START,
  SMURFS_LOAD_SUCCESS,
  SMURFS_LOAD_FAILURE,
  SMURF_ADD_SUCCESS,
  SMURF_ADD_FAILURE,
  SMURF_DELETE_SUCCESS,
  SMURF_DELETE_FAILURE
} from '../actions';

const initialState = [];

export const reducer = (state = initialState, action) => {
  console.log('REDUCER STATE', state);
  switch (action.type) {
    case SMURFS_LOAD_SUCCESS:
      return [...state, ...action.payload];

    case SMURF_ADD_SUCCESS:
      console.log('ACTION.PAYLOAD ADD', action.payload);
      return [...state, action.payload];

    case SMURF_DELETE_SUCCESS:
      console.log(action.payload)
      return state.filter(smurf => smurf.id !== action.payload);

    default:
      return state;
  }
};
