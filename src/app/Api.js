// src/config/api.js
export const BASE_API = "https://ajayaaedtech-be.onrender.com/api";
// export const BASE_API = "http://localhost:5000/api";

export const API = {
  AUTH: {
    LOGIN: `${BASE_API}/auth/login`,
    REGISTER: `${BASE_API}/auth/register`,
    LOGOUT: `${BASE_API}/auth/logout`,
    REFRESH_TOKEN: `${BASE_API}/auth/refresh-token`,
  },
  USER: {
    PROFILE: `${BASE_API}/user/profile`,
    UPDATE: `${BASE_API}/user/update`,
    DELETE: `${BASE_API}/user/delete`,
  },
  COURSES: {
    ALL: `${BASE_API}/courses`,
    SINGLE: (id) => `${BASE_API}/courses/${id}`,
    ENROLL: `${BASE_API}/courses/enroll`,
    fetchcourse: `${BASE_API}/course/names`,
    fetchcoursedetails: `${BASE_API}/course/details/`,
    MY_COURSES: `${BASE_API}/course/my-courses`,

  },
  PROFILEEDIT: {
    namechange: `${BASE_API}/user/update-profile`,
    getDataOfUser: `${BASE_API}/user/public-user`,
  },
  CALLBACKREQUEST: {
    callback: `${BASE_API}/callback/request`,
  }

};
