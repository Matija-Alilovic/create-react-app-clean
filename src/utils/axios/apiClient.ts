import axios from 'axios';
import { toast } from 'react-toastify';
import { devConsoleLog } from '../helperFunctions';
import { BrandrAxiosError, BrandrAxiosResponse } from './apiModels';

if (location.hostname == 'localhost') {
  if (process.env.BE_ENV == 'local') {
    var port = 7061;
    axios.defaults.baseURL = 'https://' + location.hostname + ':' + port;
  } else {
    axios.defaults.baseURL = 'https://brandr-api.azurewebsites.net/';
  }
} else {
  axios.defaults.baseURL = 'https://brandr-api.azurewebsites.net/';
}

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    devConsoleLog(
      `REQUEST : ${config.url}\n\nJSON : ${JSON.stringify(config)}`
    );

    return config;
  },
  function (error) {
    // Do something with request error
    devConsoleLog(`API request error : ${JSON.stringify(error)}`);

    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response: BrandrAxiosResponse) {
    devConsoleLog(
      `RESPONSE : ${response.config.url} - Status : ${
        response.status
      } \n\nJSON : ${JSON.stringify(response)}`
    );

    if (response.config.successMessage != undefined) {
      toast.success(response.config.successMessage);
    }

    return response;
  },
  function (error: BrandrAxiosError) {
    // Do something with response error
    if (error.response) {
      if (error.response.config.errorMessage != undefined) {
        toast.error(error.response.config.errorMessage);
      }
    } else {
      if (error.config.errorMessage != undefined) {
        toast.error(error.config.errorMessage);
      }
    }

    return Promise.reject({
      name: error.name,
      message: error.response?.data.Message,
      code: error.response?.status?.toString(),
      stack: error.stack,
    });
  }
);

export default axios;
