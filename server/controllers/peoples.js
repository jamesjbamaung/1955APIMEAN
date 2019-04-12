var mongoose = require('mongoose');
require('../models/people.js');

var People = mongoose.model('People');

module.exports = {
    index: function(req, res){
        People.find({}, function(err, people){
            if(err){
                res.json(err);
            }
            else{
                res.json(people);
            }
        })
    },

    addPerson: function(req, res){
        People.create({name:req.params.name}, function(err, people){
            if(err){
                res.json(err);
            }
            else{
                res.json(people);
            }
        })
    },

    removePerson: function(req, res){
        People.remove({name:req.params.name},function(err,people){
            if(err)
                res.json(err);
            else
                res.json(people);
        })
    },

    details: function(req, res){
        People.findOne({name:req.params.name},function(err,person){
            if(err)
                res.json(err);
            else
                res.json(person);
        })
    }

}