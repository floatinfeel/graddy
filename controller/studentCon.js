let Model = require('../models')

class Student {
    static show(req,res) {
        Model.StudentProject.findAll({
            where : {
                StudentId : req.params.id
            },
            include : [Model.Project,Model.Student]
        })
        .then(data=> {
            let nilai = [];
            let projectName = [];
            data.forEach(element => {
                nilai.push(element.Project.nilai)
                projectName.push(element.Project.name)
            });
            // console.log(nilai)
            res.render("studentHome",{ data , nilai , projectName })
            // res.send(nilai)
        })
        .catch(err=>res.send(err));
    }
}

module.exports = Student;