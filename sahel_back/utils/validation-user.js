
const regexEmail = new RegExp("^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$");


exports._EmptyUser = user => {
    
    const messages = [];
    
        if (!regexEmail.test(user.email)) {
            messages.push({
                field: 'email',
                data: user.email,
                message: 'Email pas Valid'
            });
        }
        if (user.fullname === '') {
            messages.push({
                field: 'fullname',
                data: user.fullname,
                message: 'Veiller Entrez Un Nom Complet'
            });
        }
        if (user.password==='') {
            messages.push({
                field: 'password',
                data: user.password,
                message: 'min valeur 8 caractères'
            });
        }
        return messages;
   
}

exports._ValidEmail = email => {
    
    const messages = [];
    
    if(!regexEmail.test(email)) {
        messages.push({
            field: 'email',
            data: email,
            message: 'Email pas Valid'
        });
    }
    return messages ;
}