const { test } = require("model.js");

const controllers = {};

controllers.dbGet = () => {
    test.find({}, (err, messages) => {
        if (err) {
            return res.send(404, {'Error: ': err});
        }
        res.locals.messages = messages;
        next();
    })
};

controllers.dbPost = (req, res, next) => {
    const {name, message} = req.body; 
    Message.create({name, message}, (err, result) => {
        if (err) {
            return res.send(404, {'Error: ': err});
        }
        res.locals.message = result;
        next();
    });
}

module.exports = controllers;
