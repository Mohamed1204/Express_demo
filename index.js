const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = __dirname + '/public/'; // path til mappen, + public da html filer ligger i public mappen

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('wwwroot'));



app.get('/', function(req, res){
    res.sendFile(path + 'login.html');
});



app.get('/login', function(req, res){
    res.sendFile(path +'login.html', function(err){
        // handle error
    });
});

app.post('/login', function (req, res) {
    console.log(req.body.user);
    console.log(req.body.pass);

    
    if(req.body.user === 'clbo'){
    

    res.sendFile(path +'index.html', function (err) {
    });
    }else{
        res.sendFile(path +'login.html', function(err){
            // handle error
        });
    }    
});


app.get('/link', function(req, res){
    res.sendFile(path+ 'link.html', function(err){

    });
})

app.post('/link', function(req, res){
    res.sendFile(path+ 'index.html', function(err){
        
            });
})

app.post('/morePages', function(req, res){
     res.sendFile(path+'verysecret.html', function(err){

     });
})

app.post('/subscribe', function(req, res){
    res.sendFile(path+'subscribe.html', function(err){

    });

    app.post('/tilForside', function(req, res){
        res.sendFile(path+'index.html', function(err){
   
        });
   })

})



app.listen(process.env.PORT || 3000);



/*var http = require('http');
http.createServer(function(req, res){
});*/