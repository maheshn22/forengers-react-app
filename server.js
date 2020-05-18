const express = require('express');
const favicon = require('express-favicon');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendgrid/mail');
const path = require('path');
const port = process.env.PORT || 8080;
//const port = 3001;
const app = express();

app.use(bodyParser.json());

app.use(cors());
app.use((req,res,next) => {
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
	res.setHeader('Access-Control-ALlow-Headers','Content-Type, Authorization');
	next();
});
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/api/email',(req,res,next) => {

	sendGrid.setApiKey('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');
	const msg = {
		to: 'forengerstest01@gmail.com',
		from: req.body.email,
		subject: 'Website Contact',
		text: req.body.message
	}

	sendGrid.send(msg)
		.then(result => {
			res.status(200).json({
				success:true
			})
		})
		.catch(err => {
			console.log('error: ',err);
			res.status(401).json({
				success: false
			})
		})
})
/*
if (process.env.NODE_ENV ==='production') {
	app.use(express.static(''))
}
*/

const startServer = (port)=>{
    app.listen(port);
    console.log("App is listening on port : "+port);
}
startServer(port);