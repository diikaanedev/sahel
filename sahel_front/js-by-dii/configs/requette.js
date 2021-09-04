import { BASE_URL } from "./path.js";
import LocalByjS from '../utils/storage.js';


export const Post = async (url,values) => new Promise((resolve, reject) => {

    fetch(`${BASE_URL()}${url}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${LocalByjS.getToken()}`
        },
        body:JSON.stringify(values)
    }).then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
});

export const Get = async (url) =>  new Promise((resolver , reject) => {


    fetch(`${BASE_URL()}${url}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': `Bearer ${LocalByjS.getToken()}`
        }
    }).then(res => res.json())
        .then(data => resolver(data))
        .catch(err => reject(err));
});