export default class LocalByjS {

    constructor() {

    }

    static setRoute = route => localStorage.setItem('route', route);

    static getRoute = () => localStorage.getItem('route');

    static setToken = token => localStorage.setItem('token', token);
    
    static getToken = () => localStorage.getItem('token');
    
    static setType = type => localStorage.setItem('type', type);
    
    static getType = () => localStorage.getItem('type');
    
    static setAvatar = avatar => localStorage.setItem('avatar', avatar);

    static getAvatar = () => localStorage.getItem('avatar');

    static setName = name => localStorage.setItem('name', name);

    static getName = () => localStorage.getItem('name');

}