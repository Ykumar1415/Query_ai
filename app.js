const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
// use cors 
app.use(cors());
// allow to send request from client 
app.use(express.json());

const cai = require('./apiRouter')
app.use('/', cai);
//allow json data
const bodyParser = require('body-parser');
app.use(bodyParser.json());
 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
)