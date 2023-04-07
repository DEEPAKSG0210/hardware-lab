import {
    LOGIN_URL_STAFF,
    SIGNUP_URL_STAFF,
    SIGNUP_URL_STUDENT,
    LOGIN_URL_STUDENT,
} from './config';

import axios from 'axios';

export const fetchStaffLogin = (postBody) => axios.post(LOGIN_URL_STAFF, postBody, {});

export const fetchStaffSignup = (postBody) => axios.post(SIGNUP_URL_STAFF, postBody, {});

export const fetchStuSignup = (postBody) => axios.post(SIGNUP_URL_STUDENT, postBody, {});

export const fetchStuLogin = (postBody) => axios.post(LOGIN_URL_STUDENT, postBody, {});

