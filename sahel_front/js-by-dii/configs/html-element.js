import { Get } from './requette.js';
import { uploadFileEvent } from '../components/villages/events/add.js';

export const p = () => document.createElement('p');

export const br = () => document.createElement('br');

export const header = () => document.createElement('header');

export const div = () => document.createElement('div');

export const i = () => document.createElement('i');

export const a = () => document.createElement('a');

export const ul = () => document.createElement('ul');

export const li = () => document.createElement('li');

export const input = () => document.createElement('input');

export const section = () => document.createElement('section');

export const span = () => document.createElement('span');

export const img = () => document.createElement('img');

export const b = () => document.createElement('b');

export const aside = () => document.createElement('aside');

export const h3 = () => document.createElement('h3');

export const ol = () => document.createElement('ol');

export const form = () => document.createElement('form');

export const label = () => document.createElement('label');

export const btn = () => document.createElement('button');

export const table = () => document.createElement('table');

export const thead = () => document.createElement('thead');

export const tbody = () => document.createElement('tbody');

export const tfood = () => document.createElement('tfoot');

export const tr = () => document.createElement('tr');

export const td = () => document.createElement('td');

export const th = () => document.createElement('th');

export const select = () => document.createElement('select');

export const option = () => document.createElement('option');

export const ucFirst = str => str[0].toUpperCase() + str.slice(1);

export const formGroup = (titre, type = 'text') => {

    let _div = div();

    _div = attribute(_div, 'class', 'form-group');

    let _label = label();


    _label = attribute(_label, 'class', 'col-sm-4 control-label');

    _label = attribute(_label, 'style', 'font-size:18px');

    _label.innerHTML = titre;


    let __div = div();

    __div = attribute(__div, 'class', 'col-sm-4 ');

    let _input = input();

    _input = attribute(_input, 'type', type);

    _input = attribute(_input, 'class', 'form-control input-lg');

    if (type === 'file') {
        _input.addEventListener('change', uploadFileEvent);
    }

    __div.appendChild(_input);

    _div.appendChild(_label);

    _div.appendChild(__div);

    return _div;

}

export const AddFormHtml = (titreForm, tabsTitreLabel, _event, value = 'Ajouter', typeForm = 1) => {
    let _div = div();

    if (typeForm === 2) {
        document.getElementsByTagName('body')[0].setAttribute('style', `
        background-image : url("http://127.0.0.1:5500/frontend/img/bg-3.jpg"); 
        background-repeat: no-repeat;  
        background-size:cover;`)
    } else {
        document.getElementsByTagName('body')[0].setAttribute('style', `
        background-image : url(""); 
        background-repeat: no-repeat;  
        background-size:cover;`)
    }

    let div12 = div();

    div12 = attribute(div12, 'class', 'col-lg-12');

    let _section = section();

    _section = attribute(_section, 'class', 'panel');


    let _header = header();

    _header = attribute(_header, 'class', 'panel-heading');

    _header.innerHTML = titreForm;

    _section.appendChild(_header);

    let divBody = div();

    divBody = attribute(divBody, 'class', 'panel-body');

    let _form = form();

    _form = attribute(_form, 'class', 'form-horizontal');

    tabsTitreLabel.forEach(element => {

        _form.appendChild(formGroup(element.titre, element.type));

    });


    let _btn = btn();

    _btn = attribute(_btn, 'class', 'btn btn-lg btn-success');

    _btn = attribute(_btn, 'type', 'submit');

    _btn = attribute(_btn, 'style', 'margin-left:48%')

    _btn.innerHTML = value;

    _form.appendChild(_btn);

    divBody.appendChild(_form);

    div12.appendChild(_section);

    div12.appendChild(divBody);

    _div.appendChild(div12);

    _form.addEventListener('submit', _event);

    return _div;
}
export const AddFormSelectHtml = (type, titreForm, tabsTitreLabel, _event) => {
    let _div = div();

    Get(`${type}`).then(data => {

        let div12 = div();

        div12 = attribute(div12, 'class', 'col-lg-12');

        let _section = section();

        _section = attribute(_section, 'class', 'panel');


        let _header = header();

        _header = attribute(_header, 'class', 'panel-heading');

        _header.innerHTML = titreForm;

        _section.appendChild(_header);

        let divBody = div();

        divBody = attribute(divBody, 'class', 'panel-body');

        let _form = form();

        _form = attribute(_form, 'class', 'form-horizontal');

        _form.appendChild(selectGroup(type, data.data));

        tabsTitreLabel.forEach(element => {

            _form.appendChild(formGroup(element.titre, element.type));

        });


        let _btn = btn();

        _btn = attribute(_btn, 'class', 'btn btn-success btn-lg');

        _btn = attribute(_btn, 'type', 'submit');

        _btn = attribute(_btn, 'style', 'margin-left:48%')

        _btn.innerHTML = 'Ajouter';

        _form.appendChild(_btn);

        divBody.appendChild(_form);

        div12.appendChild(_section);

        div12.appendChild(divBody);

        _div.appendChild(div12);

        _form.addEventListener('submit', _event);

    })
    return _div;
}

export const AddFormMultiSelect  = (tabsType) => {
    let _div = div();
    tabsType.forEach(element => {
        Get(`${element}`).then(result => {
            
        })
    });

    return _div ;

}

export const AddFormSelectMarcheHtml = (titreForm, tabsTitreLabel, _event , titre=' Ajouter') => {
    let _div = div();

    document.getElementsByTagName('body')[0].setAttribute('style', `
        background-image : url(""); 
        background-repeat: no-repeat;  
        background-size:cover;`);

    let div12 = div();

    div12 = attribute(div12, 'class', 'col-lg-12');

    let _section = section();

    _section = attribute(_section, 'class', 'panel');


    let _header = header();

    _header = attribute(_header, 'class', 'panel-heading');

    _header.innerHTML = titreForm;

    _section.appendChild(_header);

    let divBody = div();

    divBody = attribute(divBody, 'class', 'panel-body');

    let _form = form();

    _form = attribute(_form, 'class', 'form-horizontal');

    _form.appendChild(selectGroup('marche', [{ id: 'locale', text: 'Marche Locale' }, { id: 'parallele', text: 'Marche Parallele' }]));

    tabsTitreLabel.forEach(element => {

        _form.appendChild(formGroup(element.titre, element.type));

    });

    let _btn = btn();

    _btn = attribute(_btn, 'class', 'btn btn-success btn-lg');

    _btn = attribute(_btn, 'type', 'submit');

    _btn = attribute(_btn, 'style', 'margin-left:48%')

    _btn.innerHTML = titre;

    _form.appendChild(_btn);

    divBody.appendChild(_form);

    div12.appendChild(_section);

    div12.appendChild(divBody);

    _div.appendChild(div12);

    _form.addEventListener('submit', _event);

    return _div;
}
export const AddFormSelectSexeHtml = (titreForm, tabsTitreLabel, _event) => {
    let _div = div();

    document.getElementsByTagName('body')[0].setAttribute('style', `
        background-image : url(""); 
        background-repeat: no-repeat;  
        background-size:cover;`);

    let div12 = div();

    div12 = attribute(div12, 'class', 'col-lg-12');

    let _section = section();

    _section = attribute(_section, 'class', 'panel');


    let _header = header();

    _header = attribute(_header, 'class', 'panel-heading');

    _header.innerHTML = titreForm;

    _section.appendChild(_header);

    let divBody = div();

    divBody = attribute(divBody, 'class', 'panel-body');

    let _form = form();

    _form = attribute(_form, 'class', 'form-horizontal');

    _form.appendChild(selectGroup('sexe', [{ id: 'masculin', sexe: 'Masculin' }, { id: 'feminin', sexe: 'Feminin' }]));

    tabsTitreLabel.forEach(element => {

        _form.appendChild(formGroup(element.titre, element.type));

    });

    let _btn = btn();

    _btn = attribute(_btn, 'class', 'btn btn-success btn-lg');

    _btn = attribute(_btn, 'type', 'submit');

    _btn = attribute(_btn, 'style', 'margin-left:45%')

    _btn.innerHTML = 'Ajouter';

    _form.appendChild(_btn);

    divBody.appendChild(_form);

    div12.appendChild(_section);

    div12.appendChild(divBody);

    _div.appendChild(div12);

    _form.addEventListener('submit', _event);

    return _div;
}

export const attribute = (element, type, value) => {
    element.setAttribute(type, value);
    return element;
}

export const selectGroup = (type, tabs) => {
    let divFg = div();

    divFg = attribute(divFg, 'class', 'form-group');

    let lab = label();

    lab = attribute(lab, 'for', 'contrat');

    lab = attribute(lab, 'class', 'control-label col-lg-4');

    lab = attribute(lab, 'style', 'font-size:18px');

    lab.innerHTML = `Entrez votre ${ucFirst(type)}`;

    let _select = select();

    let defaultOption = option();
    _select = attribute(_select, 'id', 'contrat');
    _select = attribute(_select, 'class', 'form-control input-lg m-bot15');

    defaultOption.setAttribute('selected', 'selected');
    defaultOption.innerHTML = `Selectionnez Un ${ucFirst(type)}`;

    _select.appendChild(defaultOption);

    tabs.forEach(element => {

        let _option = option();

        _option = attribute(_option, 'value', element.id);


        switch (type) {
            case 'contry':
                _option.innerHTML = element.nomPays;
                break;

            case 'region':
                _option.innerHTML = element.nomRegion;
                break;

            case 'departement':
                _option.innerHTML = element.nomDepartement;
                break;

            case 'commune':
                _option.innerHTML = element.nomCommune;
                break;

            case 'village':
                _option.innerHTML = element.nomVillage;
                break;

            case 'culture':
                _option.innerHTML = element.nomCulture;
                break;
            case 'sexe':
                _option.innerHTML = element.sexe;
                break;
            case 'charge':
                _option.innerHTML = element.designation;
                break;
            case 'intrat':
                _option.innerHTML = element.designation;
                break;
            case 'equipement':
                _option.innerHTML = element.nomMateriel;
                break;
            case 'espece':
                _option.innerHTML = element.nomEspece;
                break;
            case 'espece':
                _option.innerHTML = element.nomEspece;
                break;
            case 'marche':
                _option.innerHTML = element.text;
                break;

            default:
                break;
        }

        _select.appendChild(_option);

    });

    divFg.appendChild(lab);

    let divSelect = div();

    divSelect = attribute(divSelect, 'class', 'col-lg-4')

    divSelect.appendChild(_select);

    divFg.appendChild(divSelect);

    return divFg;

}

