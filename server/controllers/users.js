var People = require('../models/user');

function load(req, res, next, id) {

    People.findById(id)
        .exec()
        .then((user) => {
            req.dbUser = user;
            return next();
        }, (e) => next(e));
    //console.log('here');
}

function get(req, res) {

    return res.json(req.dbUser);
}

function create(req, res, next) {
    People.create({

        username: req.body.username,
        password: req.body.password
    })
        .then((savedUser) => {

            return res.json(savedUser);
        }, (e) => { next(e) });

}

function update(req, res, next) {
    const user = req.dbUser;
    Object.assign(user, req.body);

    user.save()
        .then((savedUser) => res.sendStatus(204),
        (e) => next(e));
}

function list(req, res, next) {
    const { limit = 50, skip = 0 } = req.query;
    People.find()
        .skip(skip)
        .limit(limit)
        .exec()
        .then((users) => res.json(users),
        (e) => next(e));
}

function remove(req, res, next) {
    const user = req.dbUser;
    user.remove()
        .then(() => res.sendStatus(204),
        (e) => next(e));
}


module.exports = { load, get, create, update, list, remove };