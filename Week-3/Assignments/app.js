const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.urlencoded());
app.use(express.static('public'));
app.set('view engine', 'pug');
app.use(cookieParser());


const mainRoute = require('./routes');
const dataRoute = require('./routes/data');
const nameRoute = require('./routes/name');
const trackNameRoute = require('./routes/trackName');
app.use(mainRoute);
app.use('/data', dataRoute);
app.use('/myName', nameRoute);
app.use('/trackName', trackNameRoute);




app.listen(3000, () => {
    console.log('This application is running on local host:3000.')
});