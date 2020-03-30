
/* Módulos de dependencias do APP
  *  Cors      - Módulo de segurança
  *  Express   - Módulo responsável por configurações de BD
  *  Routes    - Módulo responsável pela configuração das rotas
*/

const cors = require('cors'); 
const express = require('express');
const routes = require('./routes');

//importando conexão do connection.js
const connection = require('./database/connection');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
