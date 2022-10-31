import {URL_LOCAL} from './Url';


export const fetchLogin = (endpoint, data, method) => {
    const url = `${URL_LOCAL}/${endpoint}`;
    
        return fetch(url,{
        method,
        headers:{
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })
};

export const fetchRestorePassword = (endpoint) => {
    const url = `${URL_LOCAL}/${endpoint}`;
    return fetch(url);
};

export const fetchResetPassword = (endpoint, data, method) => {
    const url = `${URL_LOCAL}/${endpoint}`;
    return fetch(url,{
        method,
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};


