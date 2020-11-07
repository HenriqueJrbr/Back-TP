const cliente = require('../models/cliente'); 
const status = require('http-status');
const {Op} = require('sequelize');

// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
        
        const nm_cliente = req.body.nm_cliente;
        const cd_cpf = req.body.cd_cpf;
        const cd_rg = req.body.cd_rg;
        const nm_login = req.body.nm_login;   
        const nm_senha = req.body.nm_senha;

        cliente.create({                
                nm_cliente: nm_cliente,
                cd_cpf: cd_cpf,
                cd_rg: cd_rg,
                nm_login: nm_login,
                nm_senha: nm_senha,                
        })
        //then = registra o que queremos que aconteca quando a Promise for resolvida

        .then(cliente => {
                if (cliente) {
                        res.status(status.OK).send(cliente);
                } else {
                        res.status(status.NOT_FOUND).send();
                }
        })
        
        //catch = registra o que queremos que aconteca quando a Promise falhar

        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
        
        cliente.findAll()        
                .then(cliente => {
                        if (cliente) {
                               res.status(status.OK).send(cliente);
                        }
                })
                .catch(error => next(error));      
}

exports.SelectDetail = (req, res, next) => {
        const cd_cliente = req.params.cd_cliente;

        cliente.findByPk(cd_cliente)
        
                
        .then(cliente => {
                if (cliente) {
                       res.status(status.OK).send(cliente);
                } else {
                        res.status(status.NOT_FOUND).send();
                }
        })
        .catch(error => next(error));
};

exports.Logar = (req, res, next) => {
        const nm_login = req.body.nm_login;   
        const nm_senha = req.body.nm_senha;
        console.log(nm_login);
        console.log(nm_senha);
        
        cliente.findAll({
            attributes :
                ['nm_cliente'],
            where:{
                [Op.and]: [
                    { nm_login: nm_login },
                    { nm_senha: nm_senha }
                  ]         
            }
            })
            .then(cliente => {
                if (cliente) {
                    res.status(status.OK).send(cliente);
                } else {
                    res.status(status.NOT_FOUND).send();
                }
            })
            .catch(error => next(error));
    };

exports.Update = (req, res, next) => {
        const cd_cliente = req.params.cd_cliente;
        const nm_cliente = req.body.nm_cliente;
        const cd_cpf = req.body.cd_cpf;
        const cd_rg = req.body.cd_rg;        
        
        cliente.findByPk(cd_cliente)
        .then(cliente => {
                if (cliente) {
                        cliente.update({
                                nm_cliente: nm_cliente,
                                cd_cpf: cd_cpf,
                                cd_rg: cd_rg,
                                                                
                        },
                        {
                                where: { cd_cliente: cd_cliente }
                        })
                        .then(() => {
                                res.status(status.OK).send();
                        })
                        .catch(error => next(error));
                } else {
                        res.status(status.NOT_FOUND).send();
                }
        })
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
        const cd_cliente = req.params.cd_cliente;
        cliente.findByPk(cd_cliente)
        .then(cliente => {
                if (cliente) {
                        cliente.destroy({
                                where: { cd_cliente: cd_cliente }
                        })
                        .then(() => {
                                res.status(status.OK).send();
                        })
                        .catch(error => next(error));
                }
                else {
                        res.status(status.NOT_FOUND).send();
                }
        })
        .catch(error => next(error));

};










    
