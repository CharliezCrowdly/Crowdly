import {
  BEGIN,
  SUCCESS,
  ERROR,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  TOGGLE_SIDEBAR,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  CLEAR_VALUES,
  CREATE_POST_BEGIN,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  GET_POSTS_BEGIN,
  GET_EXPLORE_BEGIN,
  GET_EXPLORE_SUCCESS,
  GET_EXPLORE_ERROR,
  SEARCH_SUCCESS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  CREATE_COMMENT_BEGIN,
  CREATE_COMMENT_ERROR,
  CREATE_COMMENT_SUCCESS,
  GET_POST_BEGIN,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  UPDATE_POST_BEGIN,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
  ADD_JOB_BEGIN,
  ADD_JOB_ERROR,
  ADD_JOB_SUCCESS,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_BEGIN,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  REMOVE_FOLLOWER_SUCCESS,
  ADD_FOLLOWER_SUCCESS,
  UPDATE_JOB_BEGIN,
  UPDATE_JOB_SUCCESS,
  UPDATE_JOB_ERROR,
  CHANGE_VALUE_BEGIN,
  SHOW_ALERT,
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

  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
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
      photo: action.payload.photo,
      naam: action.payload.naam,

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

  if (action.type === GET_POSTS_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === GET_POSTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,

      userfeed: action.payload.userfeed,
    };
  }
  if (action.type === GET_POSTS_ERROR) {
    return { ...state, isLoading: false };
  }
  if (action.type === CREATE_COMMENT_BEGIN) {
    return {
      ...state,
      isEditing: true,
    };
  }
  if (action.type === CREATE_COMMENT_SUCCESS) {
    return {
      ...state,
      isEditing: false,
    };
  }
  if (action.type === CREATE_COMMENT_ERROR) {
    return {
      ...state,
      isEditing: false,
    };
  }
  if (action.type === BEGIN) {
    return {
      ...state,
      isEditing: true,
    };
  }
  if (action.type === SUCCESS) {
    return {
      ...state,
      isEditing: false,
    };
  }
  if (action.type === ERROR) {
    return {
      ...state,
      isEditing: false,
    };
  }

  if (action.type === SEARCH_SUCCESS) {
    return {
      ...state,
      searchList: action.payload.users,
    };
  }

  if (action.type === GET_POST_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_POST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      postdetail: action.payload.postdetail,
    };
  }
  if (action.type === GET_POST_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === UPDATE_POST_BEGIN) {
    return {
      ...state,
    };
  }
  if (action.type === UPDATE_POST_SUCCESS) {
    return {
      ...state,

      showAlert: true,
      alertType: "success",
      alertText: "Post Updated",
    };
  }
  if (action.type === UPDATE_POST_ERROR) {
    return {
      ...state,

      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === GET_EXPLORE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_EXPLORE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      explorelst: action.payload.posts,
    };
  }

  if (action.type === GET_EXPLORE_ERROR) {
    return { ...state, isLoading: false };
  }

  if (action.type === ADD_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === ADD_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New JOB ADDED!",
      jobid: action.payload.id,
    };
  }
  if (action.type === ADD_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      isSubmit: false,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === GET_PROFILE_SUCCESS) {
    return {
      ...state,
      profileUser: action.payload.user,
      profilePost: action.payload.post,
      followings: action.payload.followings,
      followers: action.payload.followers,

      isLoading: false,
    };
  }

  if (action.type === UPDATE_PROFILE_BEGIN) {
    return {
      ...state,
    };
  }
  if (action.type === UPDATE_PROFILE_SUCCESS) {
    return {
      ...state,

      showAlert: true,
      alertType: "success",
      alertText: "PROFILE Updated",
    };
  }
  if (action.type === UPDATE_PROFILE_ERROR) {
    return {
      ...state,

      showAlert: true,
      alertType: "danger",
      alertText: "Invalide credential",
    };
  }

  if (action.type === REMOVE_FOLLOWER_SUCCESS) {
    const filterlst = state.profileUser.followers.filter(
      (item) => item._id != action.payload.id
    );
    var profileuser = state.profileUser;
    profileuser.followers = filterlst;
    return {
      ...state,

      profileUser: profileuser,
    };
  }

  if (action.type === ADD_FOLLOWER_SUCCESS) {
    let profile = state.profileUser;
    const yes = profile.followers.find(
      (item) => item._id === action.payload.id
    );
    if (yes) {
    } else {
      profile.followers.push(action.payload.option);
    }
    return {
      ...state,

      profileUser: profile,
    };
  }

  if (action.type === UPDATE_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "JOB UPDATEED!",
    };
  }
  if (action.type === UPDATE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      isSubmit: false,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === SHOW_ALERT) {
    return {
      ...state,

      showAlert: true,
      alertType: action.payload.alertType,
      alertText: action.payload.alertText,
    };
  }

  if (action.type === CHANGE_VALUE_BEGIN) {
    return {
      ...state,

      [action.payload.name]: action.payload.value,
    };
  }

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
