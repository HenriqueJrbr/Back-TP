// Define a string de conexão com o banco de dados
module.exports = { 
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'db_TP',
            dialect: 'mysql',
            user: 'root',
            password: 'Junior120255',
            define:{
                timestamps: true,
                underscored: true,
            },               
        }
        
    },
    
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}
