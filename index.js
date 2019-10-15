const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');


app.use(express.urlencoded());
// including static files
app.use(express.static('./assets'));


//use express router
app.use('/',require('./routes'));

// setup our view engine
app.set('view engine','ejs');
app.set('views','./views');




app.listen(port,function(err){
    if(err){
        console.log(`Error in running server : ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
})