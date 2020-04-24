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
                    res.redirect(`/student/${data.id}`)
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
            Model.Admin.findOne({
                where : {
                    username : req.body.username,
                    password : req.body.password,
                }
            })
            .then(data=> {
                if(data) {
                    res.redirect(`/admin/${data.id}`)
                } else {
                    res.send('wrong user/password')
                }
            })
            .catch(err=> res.send(err))
        } 
    }
}

module.exports = System;