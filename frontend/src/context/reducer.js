import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  CLEAR_VALUES,
  CREATE_POST_BEGIN,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
} from "./action";
import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return { ...state, showAlert: false, alertType: "", alertText: "" };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      jobLocation: "",
      userLocation: "",
    };
  }

  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editJobId: "",
      position: "",
      company: "",
      jobLocation: state.userLocation,
      jobType: "full-time",
      status: "pending",
    };
    return { ...state, ...initialState };
  }
  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,

      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }

  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,

      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }


  if (action.type === CREATE_POST_BEGIN) {
    return {
      ...state,
      isLoading: true,
      isSubmit: true,
      loadPost: true,
    };
  }
  if (action.type === CREATE_POST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      isSubmit: false,
      alertType: "success",
      alertText: "New POST Created!",
      loadPost: false,
    };
  }
  if (action.type === CREATE_POST_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      isSubmit: false,
      alertType: "danger",
      alertText: action.payload.msg,
      loadPost: action.payload.loadPost,
    };
  }

  

 

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
