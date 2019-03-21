import axios from 'axios';
import AppConsts from './appconst'

let util = {};

const ajaxUrl = AppConsts.remoteServiceBaseUrl;

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

util.ajax.interceptors.request.use(function (config) {

    return config;
}, function (error) {

    return Promise.reject(error);
});

+util.ajax.interceptors.response.use(function (response) {
    // Do something with response data

    return response;
}, function (error) {

    // Do something with response error
    if (!!error.response && !!error.response.data) {
        console.error(error.response.data.error);
    } else {
        if (!error.response) {
            console.error("defaultError");
            return
        }
        switch (error.response.status) {
            case 401:
                console.error("defaultError401")
                break;
            case 403:
                console.error("defaultError403");
                break;
            case 404:
                console.error("defaultError404");
                break;
            default:
                console.error("defaultError");
                break;
        }
    }
    
    return Promise.reject(error);
})

export default util;