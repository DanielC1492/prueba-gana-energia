//Constants
const cors = require('cors');
const express = require('express');
const app = express();
const db = require("./db");
const port = 3006;
const router = require('./router');

//Middleware

app.use(express.json());
app.use(cors());
app.use(router);


//Server Runner
db
    .then(() => {
        app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
    })
    .catch((err) => console.log(err.message))