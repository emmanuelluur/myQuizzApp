/**
 * Written by Emmanuel Lucio Urbina
 */
const express = require('express');
const path = require('path');

const rutas = require('./router/rutas.js');
const db = require('./model/quizModel');
const formidableMiddleware = require('express-formidable');
const app = express();

// uso de formData
app.use(formidableMiddleware({
    encoding: 'utf-8',
    uploadDir: './public', // file to upload
    multiples: true, // req.files to be arrays of files

}));

// uso de templates y acceso a su carpeta views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

/**
 * uso de envio de cuerpo
 * uso de carpeta public para archivos locales
 */


app.use('/public', express.static(__dirname + '/public'));

// uso de router
app.use('/',rutas);
// error
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next();
});
// run server
app.listen(80, ()=> {
    console.log(`Server run on port 3000\n  => \nCode by Emmanuel Lucio Urbina`);
})
