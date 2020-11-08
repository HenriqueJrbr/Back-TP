// Define que estamos utilizando o sequelize
const {DataTypes, STRING} = require('sequelize');

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');

const produto = sequelize.define('tb_produto', {

    id_produto: {
        allowNull: false,        
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    nm_produto: {
        type: DataTypes.STRING(45),    
    },
    vl_preco_produto: {
        type: DataTypes.FLOAT, 
    },
    nm_path_foto:{
        type: DataTypes.STRING(100),
        defaultValue:'https://i.ibb.co/ZYW3VTp/brown-brim.png'
    }
});

module.exports = produto;