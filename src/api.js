import axios from 'axios';
import Cookies from 'js-cookie';

// return access token from cookie
export const getAccessToken = () => Cookies.get('accessToken');

const instance = axios.create({
    baseURL: 'https://api.primeholding.kg/v1',
    // baseURL: 'http://localhost:8080/v1',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
    },
});

export default instance;
