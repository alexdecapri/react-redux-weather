import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // console.log('Action received', action);
  switch (action.type) {
  case FETCH_WEATHER:
    // return state.concat([action.payload.data]); // Put in array because multiple cities will be in this list
    return [ action.payload.data, ...state ]; // make new array, put action.payload.data inside of it, insert that new record at top of array
  }

  return state;
}
