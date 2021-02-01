require('./config/config');
require('./database');

const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

//=============================
//        STATIC FILES
//=============================
app.use(express.static(path.resolve(__dirname, '../public')));

//=============================
//     HANDLEBARS SETTINGS
//=============================s
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

//=============================
//        MIDDLEWARES
//=============================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//=============================
//           ROUTES
//=============================
app.use(require('./routes/index'));

app.listen(process.env.PORT, () => console.log('Corriendo en el puerto ', process.env.PORT));