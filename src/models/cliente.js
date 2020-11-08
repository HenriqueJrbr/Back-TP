// Define que estamos utilizando o sequelize
const {DataTypes} = require('sequelize');
const Sequelize = require('sequelize');

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');



const cliente = sequelize.define('tb_cliente', {

    cd_cliente: {
        allowNull: false,        
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    nm_cliente: {
        type: DataTypes.STRING(100),    
    },
    sn_cliente: {
        type: DataTypes.STRING(100),    
    },
    cep_cliente: {
        type: DataTypes.STRING(9),    
    },
    tel_cliente: {
        type: DataTypes.STRING(11),
    },
    nm_rua_cliente: {
        type: DataTypes.STRING(150),
    },
    num_endereco_cliente: {
        type: DataTypes.STRING(20),
    },
    nm_bairro_cliente: {
        type: DataTypes.STRING(100),
    },
    nm_cidade_cliente: {
        type: DataTypes.STRING(100),
    },
    uf_endereco_cliente: {
        type: DataTypes.STRING(2),
    },
    nm_complemento_cliente: {
        type: DataTypes.STRING(50),
    },
    email_cliente: {
        type: DataTypes.STRING(100),
    }
    
});


module.exports = cliente;






