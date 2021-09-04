import MessageForm from "./message-form.js";

export default class GestionErr {

    static affiche_err = (composant  , message , type) => {
        let affiche = true;
        let hide = true;
        setInterval(() => {
            if (affiche) {
                MessageForm._create_eer_form(composant, message, type);
            }
            affiche = false;
        }, 100);

        setInterval(() => {
            if (hide) {
                MessageForm._remove_err_form(composant);
            }
            hide = false;
        }, 3000);
    }

};
