import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import {
  BEGIN,
  ERROR,
  SUCCESS,
  DISPLAY_ALERT,
  CLEAR_ALERT,
  TOGGLE_SIDEBAR,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  CLEAR_VALUES,
  LOGOUT_USER,
  CREATE_POST_BEGIN,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  GET_POSTS_BEGIN,
  GET_POSTS_SUCCESS,
  GET_EXPLORE_ERROR,
  GET_EXPLORE_BEGIN,
  GET_EXPLORE_SUCCESS,
  GET_POSTS_ERROR,
  CREATE_COMMENT_BEGIN,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  GET_POST_BEGIN,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  UPDATE_POST_BEGIN,
  UPDATE_POST_ERROR,
  UPDATE_POST_SUCCESS,
  SEARCH_SUCCESS,
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

import axios from "axios";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const userLocation = localStorage.getItem("location");
const photo = localStorage.getItem("photo");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  showSidebar: false,

  isEditing: false,
  photo: photo,
  naam: "",

  isSubmit: true,
  loadPost: true,
  userfeed: [],
  explorelst: [],
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  searchList: [],
  postdetail: "",

  profileUser: "",
  profilePost: [],
  followings: [],
  followers: [],
  notification: [],
  chats: [],
  selectedChat: null,
  jobid: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // const [user, setUser] = useState();
  // const [selectedChat, setSelectedChat] = useState();
  // const [chats, setChats] = useState([]);
  // const [notification, setNotification] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  // axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`
  const authFetch = axios.create({
    baseURL: "/api/v1",
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  // response interceptor
  authFetch.interceptors.request.use(
    (config) => {
      // do something before request is sent
      config.headers.common["Authorization"] = `Bearer ${state.token}`;

      return config;
    },
    (error) => {
      // do something with the request error
      return Promise.reject(error);
    }
  );
  // response interceptor
  authFetch.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error

      if (error.response.status === 401) {
        logoutUser();
        console.log("AUTH ERROR");
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, photo, naam }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("photo", photo);
    localStorage.setItem("naam", naam);
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeFromLocalStorage();
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });

    const {
      name,
      email,
      password,
      profilePicture,
      username,
      usertype,
      cpassword,
    } = currentUser;

    let formData = new FormData();

    formData.append("name", name);
    formData.append("username", username);
    // formData.append("location", location);
    formData.append("usertype", usertype);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("profilePicture", profilePicture);
    formData.append("cpassword", cpassword);

    try {
      const { data } = await axios.post(`/api/v1/auth/${endPoint}`, formData);
      console.log(data);

      const { user, token } = data;
      const username = user.username;
      const photo = user.profilePicture;
      const naam = user.name;

      addUserToLocalStorage({
        user,
        token,
        photo,
        naam,
      });
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: {
          user,
          token,
          username,
          photo,
          alertText,
          naam,
        },
      });
    } catch (error) {
      //local storage later

      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }

    clearAlert();
  };

  const removeFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const displayalert = ({ alertType, alertText }) => {
    try {
      dispatch({
        type: SHOW_ALERT,
        payload: { alertText: alertText, alertType: alertType },
      });
    } catch (e) {
      console.log(e);
    }
    clearAlert();
  };

  const createPost = async ({ userpost }) => {
    dispatch({ type: CREATE_POST_BEGIN });
    try {
      const { userLocation, description, filetype, postfile } = userpost;
      let formData = new FormData();
      console.log(userpost);
      formData.append("location", userLocation);
      formData.append("description", description);
      formData.append("filetype", filetype);
      formData.append("postfile", postfile);

      await authFetch.post("posts/upload", formData);
      dispatch({
        type: CREATE_POST_SUCCESS,
      });

      // dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_POST_ERROR,
        payload: { msg: error.response.data.msg, loadPost: false },
      });
    }
    clearAlert();
  };

  const getallPosts = async () => {
    dispatch({ type: GET_POSTS_BEGIN });
    try {
      const response = await authFetch("/posts/getposts");
      const { posts } = response.data;

      dispatch({ type: GET_POSTS_SUCCESS, payload: { userfeed: posts } });
    } catch (error) {
      console.log(error.response);
    }
    clearAlert();

    dispatch({ type: GET_POSTS_ERROR });
  };

  const commentOnPost = async ({ commentInfo, postId }) => {
    dispatch({ type: CREATE_COMMENT_BEGIN });
    try {
      await authFetch.post(`/comment/post`, { content: commentInfo, postId });
      dispatch({ type: CREATE_COMMENT_SUCCESS });
    } catch (e) {
      console.log(e);
      dispatch({ type: CREATE_COMMENT_ERROR });
    }
  };
  const commentDelete = async ({ commentId }) => {
    dispatch({ type: BEGIN });
    try {
      await authFetch.delete(`/comment/delete/${commentId}`);
      dispatch({
        type: SUCCESS,
      });
    } catch (e) {
      dispatch({
        type: ERROR,
      });
    }
  };
  const likepost = async ({ postid }) => {
    try {
      await authFetch.patch(`/posts/likepost/${postid}`);
    } catch (error) {
      console.log(error);
    }
  };

  const unlikepost = async ({ postid }) => {
    try {
      await authFetch.patch(`/posts/unlikepost/${postid}`);
      console.log(postid);
    } catch (error) {
      console.log(error);
    }
  };

  const savepost = async ({ postid }) => {
    try {
      await authFetch.patch(`/posts/savepost/${postid}`);
    } catch (error) {
      console.log(error);
    }
  };

  const unsavepost = async ({ postid }) => {
    try {
      await authFetch.patch(`/posts/unsavepost/${postid}`);
      console.log(postid);
    } catch (error) {
      console.log(error);
    }
  };

  const getpostdetail = async ({ postid }) => {
    dispatch({ type: GET_POST_BEGIN });
    try {
      const response = await authFetch.get(`/posts/postdetail/${postid}`);
      console.log(response.data);
      dispatch({
        type: GET_POST_SUCCESS,
        payload: { postdetail: response.data.post },
      });
    } catch (error) {
      dispatch({ type: GET_POST_ERROR });
    }
  };

  const updatePost = async ({
    postid,
    description,
    location,
    filePath,
    filetype,
  }) => {
    dispatch({ type: UPDATE_POST_BEGIN });
    try {
      let formData = new FormData();

      formData.append("location", location);
      formData.append("description", description);
      formData.append("filetype", filetype);
      formData.append("filePath", filePath);
      const { post } = await authFetch.patch(
        `/posts/updatepost/${postid}`,
        formData
      );
      dispatch({ type: UPDATE_POST_SUCCESS });
    } catch (error) {
      console.log(error);

      dispatch({
        type: UPDATE_POST_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const searchProfile = async (url) => {
    try {
      const res = await authFetch.get(`/profile/${url}`);
      const { users } = res.data;

      dispatch({ type: SEARCH_SUCCESS, payload: { users } });
    } catch (e) {
      console.log(e);
    }
  };

  const explorePage = async () => {
    dispatch({ type: GET_EXPLORE_BEGIN });

    try {
      const { data } = await authFetch.get("/posts/explorepost");
      const { posts } = data;
      dispatch({
        type: GET_EXPLORE_SUCCESS,
        payload: { posts },
      });
    } catch (e) {
      dispatch({
        type: GET_EXPLORE_ERROR,
      });
    }
  };

  const addJob = async ({ values }) => {
    dispatch({ type: ADD_JOB_BEGIN });
    try {
      const {
        title,
        sector,
        experiencelvl,
        jobtype,
        skills,
        sallary,
        description,
        responsibilities,
        requirments,
        closeTime,
      } = values;
      let formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("sector", sector);
      formData.append("experiencelvl", experiencelvl);
      formData.append("jobtype", jobtype);
      formData.append("skills", skills);
      formData.append("sallary", sallary);
      formData.append("responsibilities", responsibilities);
      formData.append("requirments", requirments);
      formData.append("closeTime", closeTime);

      const { data } = await authFetch.post("job/addJob", {
        title,
        sector,
        experiencelvl,
        jobtype,
        skills,
        sallary,
        description,
        responsibilities,
        requirments,
        closeTime,
      });
      console.log(data);
      dispatch({
        type: ADD_JOB_SUCCESS,
        payload: { id: data.data._id },
      });

      // dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) return;
      dispatch({
        type: ADD_JOB_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  const unfollowUser = async (userId) => {
    try {
      await authFetch.patch(`/profile/unfollow/${userId}`);
      dispatch({ type: FOLLOW_SUCCESS });
    } catch (e) {
      console.log(e);
    }
  };
  const followUser = async (userId) => {
    try {
      await authFetch.patch(`/profile/${userId}`);
    } catch (e) {
      console.log(e);
    }
  };

  const savejob = async (jobid) => {
    try {
      await authFetch.patch(`/job/savejob/${jobid}`);
    } catch (error) {
      console.log(error);
    }
  };

  const unsavejob = async (jobid) => {
    try {
      await authFetch.patch(`/job/unsavejob/${jobid}`);
    } catch (error) {
      console.log(error);
    }
  };

  const userProfile = async (userId) => {
    dispatch({ type: BEGIN });
    try {
      const response = await authFetch.get(`/profile/${userId}`);
      const { post, user, followings, followers } = response.data;

      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: { post, user, followings, followers },
      });
    } catch (error) {
      dispatch({ type: ERROR });
    }
    clearAlert();
  };

  const updateUser = async (values) => {
    dispatch({ type: UPDATE_PROFILE_BEGIN });
    try {
      await authFetch.put("/profile/updateUser", { ...values });
      dispatch({ type: UPDATE_PROFILE_SUCCESS });
    } catch (error) {
      dispatch({ type: UPDATE_PROFILE_ERROR });
    }
    clearAlert();
  };

  const delPost = async (postId) => {
    try {
      await authFetch.delete(`/posts/postdetail/${postId}`);
    } catch (error) {
      logoutUser();
    }
  };

  const removefollower = async (userid) => {
    try {
      await authFetch.patch(`/profile/removefollower/${userid}`);
      dispatch({ type: REMOVE_FOLLOWER_SUCCESS, payload: { id: userid } });
    } catch (error) {
      console.log(error);
    }
  };

  const unfollowProfile = async (profileuser, userId) => {
    try {
      await authFetch.patch(`/profile/unfollow/${profileuser}`);
      dispatch({
        type: REMOVE_FOLLOWER_SUCCESS,
        payload: { id: userId },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const followProfile = async (profileuser, userId, option) => {
    try {
      await authFetch.patch(`/profile/${profileuser}`);
      dispatch({
        type: ADD_FOLLOWER_SUCCESS,
        payload: { id: userId, option: option },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const updateJob = async ({ values, id }) => {
    dispatch({ type: UPDATE_JOB_BEGIN });
    try {
      const { data } = await authFetch.put(`job/updatejob/${id}`, {
        ...values,
      });
      console.log(data);
      dispatch({
        type: UPDATE_JOB_SUCCESS,
      });

      // dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: UPDATE_JOB_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const picupdate = async ({ profileimg }) => {
    const formData = new FormData();
    formData.append("profileimg", profileimg);
    const { data } = authFetch.patch("profile/editprofileimg", formData);
    changevalue({ name: "photo", value: data.profilePicture });
  };

  const changevalue = async ({ name, value }) => {
    try {
      dispatch({ type: CHANGE_VALUE_BEGIN, payload: { name, value } });
      localStorage.setItem([name], value);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        logoutUser,
        unfollowUser,
        followUser,
        displayAlert,
        setupUser,
        createPost,
        getallPosts,
        commentOnPost,
        commentDelete,
        likepost,
        unlikepost,
        toggleSidebar,
        savepost,
        unsavepost,
        getpostdetail,
        updatePost,
        explorePage,
        searchProfile,
        addJob,
        savejob,
        unsavejob,
        userProfile,
        updateUser,
        delPost,
        removefollower,
        unfollowProfile,
        followProfile,
        updateJob,
        changevalue,
        picupdate,
        displayalert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
