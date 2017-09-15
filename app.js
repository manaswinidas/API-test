const express= require('express');
const bodyParser= require('body-parser');
const cookieParser= require('cookie-parser');
const routes= require('./routes');

const app = express();
// add middleware

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

//routes

app.use(routes);

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

app.listen(port,host,() =>{
  console.log(`Started server on ${host}:${port}`);
});
