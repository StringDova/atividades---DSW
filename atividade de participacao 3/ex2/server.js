import {User, printName, printAge} from './user.js';
import express from 'express'
const usuario = new User("Amazing", 100);

const app = express();
const port = 8080;

app.get('/user_data', (req, res)=>{
    res.send(`${printName(usuario)} and ${printAge(usuario)}`);
});
app.listen(port)