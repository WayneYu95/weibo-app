export const ACCESS_TOKEN = '0.0073016114288772681606068355022';

export const APP_KEY = '4027061932';
export const APP_SECRET = '6f4ee3490124bff515dff736d74b5afc';
export const REDIRECT_URI = encodeURIComponent('http://baidu.com:3000/login');

export const LOGIN_URL = `https://api.weibo.com/oauth2/authorize?client_id=${APP_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email`