const express = require('express');
const spawn = require('child_process').spawn;

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', function( req, res){
    res.send('hello from server');
}
);

app.get('/insert', function( req, res){

    const process = spawn('python', ['./pythonFiles/test.py']);
    process.stdout.on('data', (data)=> {
        res.send('pthon file data is ' + data.toString());
    })
});

app.listen(PORT, function(){
    console.log("server is running on localhost");
}
);