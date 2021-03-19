import axios from "axios";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

// API call to fetch smurfs, called on cDM in APP
export const fetchSmurfs = () => {
  console.log("fetchSmurf reducer");
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    return axios.get(`http://localhost:3333/smurfs`).then(
      (res) => dispatch({ type: FETCH_SUCCESS, payload: res.data }),
      //   (res) => console.log(res.data),
      (err) =>
        dispatch({
          type: FETCH_FAIL,
          payload: "Network Error while fetching smurfs",
        })
      //   (err) => console.log(err)
    );
  };
};

// used in 'AddForm component
export const addSmurf = (smurf) => {
  return { type: ADD_SMURF, payload: smurf };
};

// used in 'AddForm component
export const setError = (error) => {
  return { type: SET_ERROR, payload: error };
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
