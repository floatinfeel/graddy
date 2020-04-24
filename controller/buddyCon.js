let Model = require('../models')

class Buddy {
    static show (req,res) {
        Model.StudentProject.findAll({
            where : {
                BuddyId : req.params.id
            },
            include : [Model.Project,Model.Budd,Model.Student]
        })
        .then(data=> {
            console.log(data)
            res.render("instructorHome",{ data })
        })
        .catch(err=>res.send(err));
    }

    static studentDetail (req,res) {
        Model.StudentProject.findAll({
            where : {
                StudentId : req.params.sid
            },
            include : [Model.Project,Model.Student]
        })
        .then(data=> {
            // res.send(data)
            res.render('insStudent' , { data , iid : req.params.id , sid: req.params.sid, pid:req.params.pid })
        })
        .catch(err=>res.send(err));
    }

    static editScore (req,res) {
        Model.Project.findByPk(req.params.pid)
        .then(data=>{
            // res.send(data)
            res.render('insStudentEdit', { data , sid : req.params.sid, iid : req.params.iid, pid : req.params.pid })
        })
        .catch(err=>res.send(err))
    }

    static postScore (req,res) {
        Model.Project.update({
            nilai: parseInt(req.body.nilai)
        }, {
            where : {
                id : req.params.pid
            }
        })
        .then(data=>{
            res.redirect(`/instructor/student/${req.params.iid}/${req.params.sid}`)
        })
        .catch(err=>res.send(err))
    }
}

module.exports = Buddy