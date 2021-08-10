require('dotenv').config();
    
module.exports = {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        synchronize: false,
        logging: false, 
        entities: [
            '*./src/core/data/database/entities/**/*/'
        ],

    cli: {
        entitiesDir: "/src/core/data/database/entities"
        }
}