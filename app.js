var express = require("express");
var hbs = require("hbs");
var app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/partials');

app.get('/',(req,res)=>{
	res.render('report.hbs')
})

app.listen(3000,()=>
 	console.log("server started"));




