const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require("cors");
const casesRoutes = require('./routes/casesRoutes')
const path = require('path')
const root = require('./routes/root')
const corsOptions = require('./corsOptions')
const cookieSession = require("cookie-session");

// Express App

const app=express()
const db = process.env.DATABASE
const port = process.env.PORT
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(cors())

//Middleware

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

const corsOption = {
    origin: 'https://client-list-frontend.vercel.app/', // Replace with your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  };
  
// app.use(cors(corsOptions));
app.use(cors(corsOption));
  
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://client-list-frontend.vercel.app/'); // Replace with your allowed origin(s)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);



//Routes

app.use('/', root)
app.use('/api/cases', casesRoutes)

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})
//connecting to MongoDB

mongoose.connect(db)
    .then(()=>{
        app.listen(port, ()=> {
            console.log('connection to mongoDB has been established successfully on port ', port)
        })
    })
    .catch((error) => {
        console.log(error)
    })