import { header, attribute, div, i, a, ul, form, span, input, li, img, b } from "../configs/html-element.js";
import LocalByjS from "../utils/storage.js";
import BaseTemplate from "./base-template/template.js";
import Login from "./login/add-form.js";

export default class Navbar extends HTMLElement {

    constructor() {
        super();
    }

    static _notificationRow = (tabs, username = LocalByjS.getName()) => {

        console.log(username);

        let _div = div();

        _div = attribute(_div, 'class', 'top-nav notification-row');

        let _ul = ul();

        _ul = attribute(_ul, 'class', 'nav pull-right top-menu');

        tabs.forEach(element => {

            _ul.appendChild(element);

        });

        _ul.appendChild(this.navLiProfile({ username }));

        _div.appendChild(_ul);

        return _div;

    }

    static navLi = (element) => {
        let _li = li();

        _li = attribute(_li, 'class', 'dropdown');

        let _a = a();

        _a = attribute(_a, 'class', 'dropdown-toggle');

        _a = attribute(_a, 'data-toggle', 'dropdown');

        _a = attribute(_a, 'href', '#');

        let _i = i();

        _i = attribute(_i, 'class', `icon-${element.icon}-l`);

        let _span = span();

        _span = attribute(_span, 'class', 'badge bg-important');

        _span.innerHTML = element.note;

        _a.appendChild(_i);

        _a.appendChild(_span);

        _li.appendChild(_a);

        _li.addEventListener('click', element.event);


        return _li;
    }

    static navLiProfile = (element) => {
        let _li = li();

        _li = attribute(_li, 'class', 'dropdown');

        let _a = a();

        _a = attribute(_a, 'class', 'dropdown');

        _a = attribute(_a, 'data-toggle', 'dropdown');

        _a = attribute(_a, 'href', '#');


        let _spanImg = span();

        _spanImg = attribute(_spanImg, 'class', 'profile-ava');


        let _img = img();

        _img = attribute(_img, 'src', 'img/avatar1_small.jpg');

        _spanImg.appendChild(_img);

        let _spanUsername = span();

        _spanUsername = attribute(_spanUsername, 'class', 'username');

        _spanUsername.innerHTML = element.username

        let _b = b();

        _b = attribute(_b, 'class', 'caret');

        _a.appendChild(_spanImg);

        _a.appendChild(_spanUsername);

        _a.appendChild(_b);

        _li.appendChild(_a);

        let i = 0;

        _li.addEventListener('click', e => {
            e.preventDefault();

            e.target.appendChild(this._submenu());


            if (e.target.getAttribute('class') === 'dropdown') {
                e.target.setAttribute('class', 'dropdown open');
            } else {
                e.target.setAttribute('class', 'dropdown');
            }

            e.stopPropagation();
        })

        return _li;
    }

    static _searchForm = () => {

        let _div = div();

        _div = attribute(_div, 'class', 'nav search-row');

        _div = attribute(_div, 'id', 'top_menu');

        let _ul = ul();

        _ul = attribute(_ul, 'class', 'nav top-menu');

        let _form = form();

        _form = attribute(_form, 'class', 'navbar-form');

        let _input = input();

        _input = attribute(_input, 'class', 'form-control');

        _input = attribute(_input, 'placeholder', 'Search');

        _input = attribute(_input, 'type', 'text');

        _form.appendChild(_input);

        let _li = li();

        _li.appendChild(_form);

        _ul.appendChild(_li);

        return _div;

    }


    static _toggleNav = () => {

        let _div = div();

        _div = attribute(_div, 'class', 'toggle-nav');

        let __div = div();

        __div = attribute(__div, 'class', 'icon-reorder tooltips');

        __div = attribute(__div, 'data-original-title', 'Menu Navigation');

        __div.addEventListener('click', e => {
            alert('icic')
        })

        __div = attribute(__div, 'data-placement', 'bottom');


        let _i = i();

        _i = attribute(_i, 'class', 'icon_menu');

        __div.appendChild(_i);

        _div.appendChild(__div);

        return _div;


    }

    static _logo = () => {

        let _a = a();

        _a = attribute(_a, 'class', 'logo');

        _a.href = '#';

        _a.innerHTML = 'TAXANE';

        let _span = span();

        _span = attribute(_span, 'class', 'lite');

        _span.innerHTML = 'INFO';

        _a.appendChild(_span);

        _a.addEventListener('click', e => {
            alert('INdex Home Tab Click')
        })

        return _a;

    }

    static _create = (username) => {

        let _header = header();

        _header = attribute(_header, 'class', 'header dark-bg');

        _header.appendChild(this._toggleNav());

        _header.appendChild(this._logo());

        _header.appendChild(this._searchForm());

        const tabs = [
            this.navLi({ icon: 'task', note: 6, event: e => { alert('Events Tab menu') } }),
            this.navLi({ icon: 'envelope', note: 5, event: e => { alert('Events Tab menu') } }),
            this.navLi({ icon: 'bell', note: 3, event: e => { alert('Events Tab menu') } }),
        ];

        _header.appendChild(this._notificationRow(tabs, username));

        return _header;


    }

    static _submenu = () => {
        let _ul = ul();
        _ul = attribute(_ul, 'class', 'dropdown-menu extended logout')

        let _div = div();

        _div = attribute(_div, 'class', 'log-arrow-up ');

        let _profile = li();

        _profile = attribute(_profile, 'class', 'eborder-top');

        let _lien_profile = a();

        _lien_profile = attribute(_lien_profile, 'href', '#');

        let _icon_lien_profile = i();

        _icon_lien_profile = attribute(_icon_lien_profile, 'class', 'icon_profile');

        _lien_profile.appendChild(_icon_lien_profile);

        _lien_profile.innerHTML = 'MON PROFILE';

        _profile.appendChild(_lien_profile);

        let _logout = li();

        _logout.innerHTML = 'DECCONECTION';

        let _lien_logout = a();

        _lien_logout = attribute(_lien_logout, 'href', '#');

        _logout.addEventListener('click' , e => {
            e.preventDefault();

            localStorage.clear();

        BaseTemplate.body(document.createElement('p'), document.createElement('p') , Login._create() );

        })

        let _icon_lien_logout = i();

        _icon_lien_logout = attribute(_icon_lien_logout, 'class', 'icon_key_alt')

        _ul.appendChild(_div);

        _ul.appendChild(_profile);

        _ul.appendChild(_logout);

        return _ul;

    }

    static _subliNav = element => {

        let _li = li();



    }

};
