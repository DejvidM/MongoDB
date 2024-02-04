const express = require('express');
const app = express();
require('./config/jokes.config');
app.use( express.json());
app.use( express.urlencoded ({ extended : true}));

const jokeRoutes = require('./routes/jokes.routes');
jokeRoutes(app);

app.listen(8000 , () => console.log('working'));
