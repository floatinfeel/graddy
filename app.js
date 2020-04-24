let express = require('express');
let app = express()
let port = 3000;
let Student = require('./controller/studentCon.js');
let System = require('./controller/systemCon.js')
let Buddy = require('./controller/buddyCon.js');
let Admin = require('./controller/adminCon.js');

app.set('view engine', 'ejs');
app.use(express.urlencoded( { extended : false }));

// system routes
app.get('/',System.login);
app.post('/login',System.validation)
// Admin routes
app.get('/admin',Admin.home)
app.get('/admin/:id',Admin.home)
app.get('/admin/instructor/show',Admin.showIns)
app.get('/admin/instructor/add',Admin.addIns)
app.post('/admin/instructor/add',Admin.postAdd)
app.get('/admin/instructor/detail/:id',Admin.insDetail)
// student routes
app.get('/student/:id',Student.show)
// buddy routes
app.get('/instructor/:id',Buddy.show)
app.get('/instructor/student/:id/:sid',Buddy.studentDetail)
app.get('/instructor/student/score/:iid/:sid/:pid',Buddy.editScore)
app.post('/instructor/student/score/:iid/:sid/:pid',Buddy.postScore)



app.listen(port,()=>{
    console.log(`app listen to port `,port)
})