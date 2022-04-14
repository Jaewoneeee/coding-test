const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser())


app.get('/', function(req, res) {
    res.send('test')
    console.log('Cookies: ', req.cookies)
})


app.listen(3000, function(){
  console.log('Listening at 3000');
});


// app.get('/',function(req,res){
//     res.send('test');
//   })
//   ;

