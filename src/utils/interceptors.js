import { ACCESS_TOKEN } from '../constants';

const responseInterceptors = [
  {
    name: 'formatResponse',
    success(response) {
      return response.data;
    }
  },
];

const requestInterceptors = [
  {
    name: 'addHttpRequestHeader',
    success(config) {
      config.headers['Authorization'] = `OAuth2 ${ACCESS_TOKEN}`;
      return config;
    },
    fail(err) {
      console.error('result error: ', err);
      return Promise.reject(err);
    }
  }
];

const interceptors = {
  response: responseInterceptors,
  request: requestInterceptors
};

function doInstall(instance, options = {}) {
  const { type } = options;
  interceptors[type]
    .forEach((interceptor) => {
      const { success, fail } = interceptor;
      instance.interceptors[type].use(success, fail);
    })
}

export function install(instance, option = {}) {
  doInstall(instance, {
    type: 'request',
  })
  doInstall(instance, {
    type: 'response',
  })
}