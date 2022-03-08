// require modules
const express = require('express');
const morgan = require('morgan');
const connectionRoutes = require('./routes/connectionRoutes');

// create app
const app = express();

// configure app
let port = 3000;
let host = 'localhost';
app.set('view engine','ejs');

// mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

// set up routes
app.get('/',(req, res)=> {
    res.render('index');
})

app.get('/connection', (req, res) => {
    res.render('connection');
})

app.get('/index',(req, res)=> {
    res.render('index');
})

app.get('/about',(req, res)=> {
    res.render('about');
})

app.get('/contact',(req, res)=> {
    res.render('contact');
})

app.get('/error',(req, res) => {
    res.render('error');
})

app.get('/edit',(req, res) => {
    res.render('edit');
})

app.use('/connections', connectionRoutes);

// start the server
app.listen(port, host, ()=> {
    console.log('Server is running on port', port);
})