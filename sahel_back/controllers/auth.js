const authModel = require('../models/auth');

const bcrytjs = require('bcryptjs');

const salt = bcrytjs.genSaltSync(10);

const jwt = require('jsonwebtoken');

const validation = require('../utils/validation-user');

const tabsAdmin = require('../data/admin');

const tabsAgents = require('../data/agents');

exports.regroupement_login = (req, res, next) => {

    

}
exports.login = (req, res, next) => {

    let { email } = req.body;

        const errors = validation._ValidEmail(email);


        if (errors.length > 0) {
            return res.json({
                statusCode: 304,
                errors: errors
            });
        } else {

            authModel.findOne({
                raw: true,
                where: {
                    email: email
                }
            }).then(result => {
                let role = (result.role === 0) ? 'Admin' : 'Agents';
                
                if (bcrytjs.compareSync(req.body.password, result.password)) {
                    const token = jwt.sign({
                        id_user: result.id,
                        role_user: result.role , 
                        
                    }, process.env.JWT_SECRET, { expiresIn: '8784h' });
                    if (role === 'Admin') {
                        return res.json({
                            message: 'Connection réussi',
                            fullname: result.fullname,
                            role: role,
                            menu: tabsAdmin,
                            status: 'OK',
                            data: token,
                            statusCode: 200
                        });
                    } else {
                        return res.json({
                            message: 'Connection réussi',
                            fullname: result.fullname,
                            role: role,
                            menu: tabsAgents,
                            status: 'OK',
                            data: token,
                            statusCode: 200
                        });
                    }
                } else {
                    return res.json({
                        message: 'Identifiant Incorrect',
                        status: 'NOT OK',
                        data: null,
                        statusCode: 401
                    });
                }

            }).catch(_ => {
                return res.json({
                    message: 'Identifiant Incorrect',
                    status: 'NOT OK',
                    data: null,
                    statusCode: 401
                });
            });

        }

}

exports.singIn = (req, res, next) => {

    let { fullname, email, password, c_password } = req.body;

    let errors = validation._ValidEmail(email);

    //errors.push(validation._EmptyUser(req.body));

    if (errors.length > 0) {
        return res.json({
            statusCode: 304,
            errors: errors
        });

    } else {
        if (password === c_password) {

            password = bcrytjs.hashSync(password, salt);

            let role = 1;

            const body = { fullname, password, email, role };



            authModel.create(body).then((auth) => {

                const token = jwt.sign({
                    id_user: auth.id,
                    role_user: auth.role
                }, process.env.JWT_SECRET, { expiresIn: '8784h' });

                return res.json({
                    data: token,
                    message: 'Auth Succfully',
                    statusCode: 200
                })
            }).catch((errAuth) => {
                return res.json({
                    data: errAuth,
                    message: 'Err Auth',
                    statusCode: 304
                })
            });

        } else {
            return res.json({
                statusCode: 304,
                errors: errors
            });
        }
    }





}