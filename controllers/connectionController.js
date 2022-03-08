const model = require('../models/connection')

exports.index = (req, res) => {
    let connections = model.find();
    res.render('connections', {connections});
}

exports.new = (req, res) => {
    res.render('newConnection');
}
 
exports.create = (req, res) => {
    res.send('created new connection');
}

exports.show = (req, res) => {
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection) {
        res.render('connection', {connection});
    }
    else {
        res.status(404).render('error');
    }
}

exports.edit = (req, res) => {
    let id = req.params.id;
    let connection = model.findById(id);
    if(connection) {
        res.render('./editConnection', {connection})
    }
    else {
        res.status(404).render('error');
    }
}

exports.update = (req, res) => {
    res.send('update story with id' + req.params.id);
}

exports.delete = (req, res) => {
    res.send('delete story with id' + req.params.id);
}