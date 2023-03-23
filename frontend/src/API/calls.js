import {
    LOGIN_URL,
    SIGNUP_URL
} from './config';

import axios from 'axios';

export const fetchLogin = (postBody) => axios.get(LOGIN_URL, postBody, {});

export const fetchSignup = (postBody) => axios.post(SIGNUP_URL, postBody, {});