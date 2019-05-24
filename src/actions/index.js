import axios from "axios";
import dist from "react-loader-spinner/dist";

// L O G I N

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({
    type: LOGIN_START
  });

  return axios
    .post("https://party-planner-john.herokuapp.com/api/auth/login", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.id);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data.id
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: LOGIN_FAILURE,
        payload: err
      });
    });
};

// R E G I S T E R

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const register = cred => dispatch => {
  dispatch({
    type: REGISTER_START
  });
  return axios
    .post("https://party-planner-john.herokuapp.com/api/auth/register", cred)
    .then(res => {
      console.log(res);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("error reging", err);
      dispatch({
        type: REGISTER_FAILURE,
        payload: err
      });
    });
};

// P A R T Y L I S T

export const PARTY_START = "PARTY_START";
export const PARTY_SUCCESS = "PARTY_SUCCESS";
export const PARTY_FAILURE = "PARTY_FAILURE";
export const USER_UNAUTHORIZED = "PARTY_FAILURE";

export const getParty = () => dispatch => {
  dispatch({ type: PARTY_START });
  let userId = localStorage.getItem("userId");
  return axios
    .get(
      `https://party-planner-john.herokuapp.com/api/parties/${userId}/yours`,
      {
        headers: { Authorization: localStorage.getItem("token") }
      }
    )
    .then(res => {
      console.log(res.data.party);
      dispatch({ type: PARTY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.table("call failed", err.reponse);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.reponse });
      } else {
        dispatch({ type: PARTY_FAILURE, payload: err.reponse });
      }
    });
};

// A D D T O P A R T Y

export const ADD_PARTY_START = "ADD_PARTY_START";
export const ADD_PARTY_SUCCESS = "ADD_PARTY_SUCCESS";
export const ADD_PARTY_FAILURE = "ADD_PARTY_FAILURE";

export const addParty = party => dispatch => {
  dispatch({ type: ADD_PARTY_START });
  const token = localStorage.getItem("token");
  const headers = {
    "content-type": "application/json",
    Authorization: localStorage.getItem("token")
  };
  return axios
    .post("https://party-planner-john.herokuapp.com/api/parties", party,
    {
      headers, token
    })
    .then(res => {
      dispatch({ type: ADD_PARTY_SUCCESS, payload: res.data });
      console.log(res);
    })
    .catch(err => {
      console.log(err);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: ADD_PARTY_FAILURE, payload: err.response });
      }
    });
};

// D E L E T E P A R T Y

export const DELETE_PARTY_START = "DELETE_PARTY_START";
export const DELETE_PARTY_SUCCESS = "DELETE_PARTY_SUCCESS";
export const DELETE_PARTY_FAILURE = "DELETE_PARTY_FAILURE";

export const deleteParty = id => dispatch => {
  dispatch({ type: DELETE_PARTY_START });
  axios
    .delete(`https://party-planner-john.herokuapp.com/api/parties/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_PARTY_SUCCESS, payload: id });
    })
    .catch(err => {
      console.log("catch these hands bruh", err);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: DELETE_PARTY_FAILURE, payload: err.response });
      }
    });
};

// U P D A T E P A R T Y

export const EDIT_PARTY_START = "EDIT_PARTY_START";
export const EDIT_PARTY_SUCCESS = "EDIT_PARTY_SUCCESS";
export const EDIT_PARTY_FAILURE = "EDIT_PARTY_FAILURE";

export const editParty = (party, id) => dispatch => {
  dispatch({ type: EDIT_PARTY_START });
  return axios
    .put(`https://party-planner-john.herokuapp.com/api/parties/${id}`, party, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: EDIT_PARTY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(id);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: EDIT_PARTY_FAILURE, payload: err.response });
      }
    });
};

// T O D O L I S T

export const TODO_START = "TODO_START";
export const TODO_SUCCESS = "TODO_SUCCESS";
export const TODO_FAILURE = "TODO_FAILURE";

export const getTodo = id => dispatch => {
  dispatch({ type: TODO_START });
  return axios
    .get(`https://party-planner-john.herokuapp.com/api/parties/3`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res.data.todo);
      dispatch({ type: TODO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("failed bruh", err);
      dispatch({ type: TODO_FAILURE, payload: err.response });
    });
};

export const ADD_TODO_START = "ADD_TODO_START";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";

export const addTodo = todo => dispatch => {
  console.log(todo);
  dispatch({ type: ADD_TODO_START });
  return axios
    .post(`https://party-planner-john.herokuapp.com/api/parties/3/todo`, todo, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_TODO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_TODO_FAILURE, payload: err.reponse });
    });
};

export const DELETE_TODO_START = "DELETE_TODO_START";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";

export const deleteTodo = id => dispatch => {
  dispatch({ type: ADD_TODO_START });
  return axios
    .delete(`https://party-planner-john.herokuapp.com/api/parties/${id}/todo`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_TODO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      if (err.reponse.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.reponse });
      } else {
        dispatch({ type: ADD_TODO_FAILURE, payload: err.reponse });
      }
    });
};

// S H O P P I N G L I S T

export const SHOPPING_START = "SHOPPING_START";
export const SHOPPING_SUCCESS = "SHOPPING_SUCCESS";
export const SHOPPING_FAILURE = "SHOPPING_FAILTURE";
