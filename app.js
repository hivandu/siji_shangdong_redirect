var express = require('express'),
    app = express();

app.get('/dist', function(req, res){
    res.redirect('http://www.sisobrand.com:2345/dist');
	res.status(200);
    res.sendFile(__dirname ,'index.html');
});

app.get('*', function(req, res){
    res.status(404);
});

app.listen(1111, "120.26.48.94");
console.log('Express server started at 120.26.48.94:1111');

