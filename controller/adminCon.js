let Model = require('../models')

class Admin {
    static home (req,res) {
        let data = [];
        Model.Student.findAll({})
        .then(student=> {
            // 1
            Model.Budd.findAll({})
            .then(buddy=>{
                // 2
                Model.Project.findAll({})
                .then(project=>{
                    res.render('adminHome', { student , buddy , project })
                })
                .catch(err=>res.send(err))
            })
            .catch(err=>res.send(err))

        })
        .catch(err=>res.send(err));
    }

    static addIns (req,res) {
        res.render('addIns')
    }

    static postAdd (req,res) {
        Model.Budd.create({
            name: req.body.name,
            email: req.body.email,
            phone_number: req.body.phone_number,
            username: req.body.username,
            password: req.body.password
        })
        .then(data=>{
            res.redirect('/admin')
        }).catch(err=>res.send(err))
    }

    static showIns (req,res) {
        Model.Budd.findAll({})
            .then(buddy=>{
                res.render('ins', { buddy })
            })
            .catch(err=>res.send(err))
    }

    static insDetail (req,res) {
        Model.StudentProject.findAll({
            where : {
                BuddyId : req.params.id
            },
            include : [Model.Project,Model.Budd,Model.Student]
        })
        .then(result=> {
            if( result.length <=0 ) {
                res.send('Instructur ini belum di tugaskan ')
            } else if (result[0].Student==null) {
                let error = 'Instruktur ini belum memiliki student'
                res.render("insDetail", { error , result} )
            } else {
                res.render("insDetail", { result , error : null } )
            }
        })
        .catch(err=>res.send(err));
    }

}

module.exports = Admin;