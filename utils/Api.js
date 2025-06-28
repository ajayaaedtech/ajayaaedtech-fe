
const BASE_URL =  'http://localhost:5000/api';

export const LOGIN_API = `${BASE_URL}/auth/login`;
export const REGISTER_API = `${BASE_URL}/auth/register`;
export const VERIFY_OTP_API = `${BASE_URL}/auth/verify-otp`;
export const form_submit_Api = `https://ajayaaedtech-be.onrender.com/api/form/submit`;

export const USER_PROFILE_API = `${BASE_URL}/user/profile`;
export const USER_UPDATE_API = `${BASE_URL}/user/update`;

export const ALL_COURSES_API = `${BASE_URL}/course/all`;
export const SINGLE_COURSE_API = (id) => `${BASE_URL}/course/${id}`;

export const CONTACT_API = `${BASE_URL}/contact`;
