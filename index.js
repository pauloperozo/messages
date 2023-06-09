import dotenv from 'dotenv'
import api from './src/index.js'

console.clear() 
dotenv.config() /**Cargar Variables De Entorno */
api.start() /*Iniciar Api */