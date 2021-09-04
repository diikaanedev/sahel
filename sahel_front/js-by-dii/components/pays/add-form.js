import { AddFormHtml } from "../../configs/html-element.js";
import { Post } from "../../configs/requette.js";
import GestionErr from "../../configs/gestion-err.js";

export default class AddPays extends HTMLElement {


    static _create = () => {

        const tabs = [{titre : 'Code Pays' , type:'text'},{titre : 'Nom Pays' , type:'text'}];

        return AddFormHtml('Formulaire Ajout Pays' , tabs , this.addPaysEvent);

    }

    static  addPaysEvent = e => {
        e.preventDefault();

        const code = e.target.getElementsByTagName('input')[0].value ;
        const nomPays = e.target.getElementsByTagName('input')[1].value ;

        Post('contry' , {nomPays , code}).then(data => {

            if(data.statusCode === 200) {
                GestionErr.affiche_err(e.target , data.message  , 'success');
            }else {
                GestionErr.affiche_err(e.target , data.message  , 'danger');
            }
                        
        });
        
    }

    
};


