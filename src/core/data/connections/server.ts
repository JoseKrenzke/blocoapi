import express, { Request, Response} from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';
import Database from './core/data/connections/Database';

const app = express();
const port = process.env.PORT || 8080;
        
    app.use(express.json());      
    app.use(express.urlencoded({ extended: false }));
    
dotenv.config({ 
    path: '../.env'
});
    
app.get('./', (request: Request, response: Response) => {
    return response.send('API OK');
});
    
new Database().openConnection().then(() => {
    app.listen(port, () => {
        console.log('API Rodando...'),
    });
});