import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  PARTY_START,
  PARTY_SUCCESS,
  PARTY_FAILURE,
  ADD_PARTY_START,
  ADD_PARTY_SUCCESS,
  ADD_PARTY_FAILURE,
  DELETE_PARTY_START,
  DELETE_PARTY_SUCCESS,
  DELETE_PARTY_FAILURE,
  EDIT_PARTY_START,
  EDIT_PARTY_SUCCESS,
  EDIT_PARTY_FAILURE
} from "../actions";

const initialState = {
  loggingIn: false,
  isLoggedIn: false,
  addingParty: false,
  deletingParty: false,
  editingParty: false,
  parties: [],
  fetchingParties: false,
  error: "",
  errorStatusCode: null
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    // L O G I N
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        token: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: null,
        loggingIn: false,
        isLoggedIn: false
      };
    // R E G I S T E R
    case REGISTER_START:
      return {
        ...state,
        isLoggedIn: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };
    // P A R T Y L I S T
    case PARTY_START:
      return {
        ...state,
        fetchingParties: true
      };
    case PARTY_SUCCESS:
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        isLoggedIn: true,
        fetchingParties: false,
        parties: action.payload.party
      };
    // A D D T O P A R T Y L I S T
    case ADD_PARTY_START:
      return {
        ...state,
        addingParty: true
      };
    case ADD_PARTY_SUCCESS:
      return {
        ...state,
        addingParty: false,
        error: "",
        isLoggedIn: true,
        errorStatusCode: null,
        parties: [...state.parties, action.payload]
      };
    // D E L E T E P A R T Y
    case DELETE_PARTY_START:
      return {
        ...state,
        deletingParty: true
      };
    case DELETE_PARTY_SUCCESS:
      return {
        ...state,
        deletingParty: false,
        error: "",
        errorStatusCode: null,
        parties: state.parties.filter(party => party.id !== action.payload)
      };
    // E D I T P A R T Y
    case EDIT_PARTY_START:
      return {
        ...state,
        editingParty: true
      };
    case EDIT_PARTY_SUCCESS:
      return {
        ...state,
        editingParty: false,
        error: "",
        errorStatusCode: null,
        parties: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
