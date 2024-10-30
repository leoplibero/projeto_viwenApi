const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/routes')

app.use(express.json());

routes(app)

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})