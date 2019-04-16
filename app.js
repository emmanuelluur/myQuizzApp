let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let rutas = require('./router/rutas.js');
let db = require('./config');
let app = express();

// uso de templates y acceso a su carpeta views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

/**
 * uso de envio de cuerpo
 * uso de carpeta public para archivos locales
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
    console.log(`Server run on port 80`);
})
