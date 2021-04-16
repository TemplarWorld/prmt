// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
};

// Reducer
export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.GET_USER_SUCCESS:
      return { ...state, user: action.payload };
    case types.CREATE_USER_SUCCESS:
      return { ...state, user: action.payload };
    case types.UPDATE_USER_SUCCESS:
      return { ...state, user: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}