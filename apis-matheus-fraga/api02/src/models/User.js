import {Schema, model} from 'mongoose';

const UserSchema = new Schema({
    email: String,
    nome: String,
    telefone: String,    
})