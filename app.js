let express = require('express');
let app = express()
let port = 3000;
let Student = require('./controller/studentCon.js');
let System = require('./controller/systemCon.js')
let Buddy = require('./controller/buddyCon.js')

app.set('view engine', 'ejs');
app.use(express.urlencoded( { extended : false }));

// system routes
app.get('/',System.login);
app.post('/login',System.validation)
// student routes
app.get('/student',Student.show)
// buddy routes
app.get('/instructor/:id',Buddy.show)



app.listen(port,()=>{
    console.log(`app listen to port `,port)
})