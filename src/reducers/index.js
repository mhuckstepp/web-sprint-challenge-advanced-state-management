import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_SMURF,
  SET_ERROR,
} from "../actions";

export const initialState = {
  smurfs: [
    {
      id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ2",
      name: "Poppa Smurf",
      position: "Village Leader",
      nickname: "Pops",
      description:
        "Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.",
    },
    {
      id: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ8",
      name: "Kid Smurf",
      position: " Non",
      nickname: "Popser",
      description:
        "Kids is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.",
    },
  ],
  isFetching: false,
  err: "",
};

const reducer = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case FETCH_START:
      console.log("fetch start reducer");
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      console.log();
      return {
        ...state,
        isFetching: false,
        err: "",
        smurfs: [...state.smurfs, ...action.payload],
      };
    case FETCH_FAIL:
      return { ...state, isFetching: false, err: action.payload };
    case ADD_SMURF:
      return { ...state, smurfs: [...state.smurfs, action.payload] };
    case SET_ERROR:
      return { ...state, err: action.payload };
    default:
      return state;
  }
};
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
