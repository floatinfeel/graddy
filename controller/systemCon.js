let Model = require('../models')

class System {
    static login (req,res) {
        res.render(`login`)
    }

    static validation ( req,res) {
        if (req.body.role=='student') {
            Model.Student.findOne({
                where : {
                    username : req.body.username,
                    password : req.body.password,
                }
            })
            .then(data=> {
                if(data) {
                    res.redirect('/student')
                } else {
                    res.send('no match')
                }
            })
            .catch(err=> res.send(err))
        } else if (req.body.role=='instructor') {
            Model.Budd.findOne({
                where : {
                    username : req.body.username,
                    password : req.body.password,
                }
            })
            .then(data=> {
                if(data) {
                    res.redirect(`/instructor/${data.id}`)
                } else {
                    res.send('no match')
                }
            })
            .catch(err=> res.send(err))
        } else if (req.body.role=='admin') {
            res.send(`masuk admin`)
            // Model.Budd.findAll({
            // })
            // .then(data=> {
            //     res.send(data)
            // })
            // .catch(err=> res.send(err))
        } 
    }
}

module.exports = System;