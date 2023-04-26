const Pirates = require("../models/pirates.model");

module.exports = {
    index: (req, res) => {
        Pirates.find().sort({name: 1})
            .then(data => res.json({results: data}))
            .catch(err => res.json({ message: 'Something went wrong... ', error: err }));
    },
    show: (req, res) => {
        Pirates.findOne({ _id: req.params._id })
            .then(data => res.json({results: data}))
            .catch(err => res.json({ message: 'Something went wrong... ', error: err }));
    },
    create: (req, res) => {
        Pirates.create(req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.json({ message: 'Something went wrong... ', error: err }));
    },
    update: (req, res) => {
        Pirates.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
            .then(data => res.json({results: data}))
            .catch(err => res.json({ message: 'Something went wrong... ', error: err }));
    },
    delete: (req, res) => {
        Pirates.deleteOne({ _id: req.params._id })
            .then(data => res.json({results: data}))
            .catch(err => res.json({ message: 'Something went wrong... ', error: err }));
    }

}