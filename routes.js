// Global
const HOME = "/";
const GET_JOIN = "/getJoin";
const POST_JOIN = "/postJoin";
const LOGIN = "/login";
const LOGOUT = "logout";
const SEARCH = "/search";

// User
const USERS = "/users";
const USER_DETAIL = "/:id"
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEOS_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes ={
    home: HOME,
    getJoin: GET_JOIN,
    postJoin: POST_JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videosDetail: VIDEOS_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;