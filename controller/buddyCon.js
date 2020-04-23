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
            res.send(data)
        })
        .catch(err=>res.send(err));
    }
}

module.exports = Buddy