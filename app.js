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
app.get('/instructor',Admin.showIns)
app.get('/instructor/add',Admin.addIns)
app.post('/instructor/add',Admin.postAdd)
// student routes
app.get('/student',Student.show)
// buddy routes
app.get('/instructor/:id',Buddy.show)



app.listen(port,()=>{
    console.log(`app listen to port `,port)
})