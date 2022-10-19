import {URL_LOCAL} from './Url';


export const fetchLogin = (endpoint, data, method = 'POST') => {
    const url = `${URL_LOCAL}/${endpoint}`;
    
        return fetch(url,{
        method,
        headers:{
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    })
};


