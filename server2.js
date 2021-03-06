var path = require('path');
var express = require('express');
const {usersRouter} = require('./express/users-router');
const mongoose = require("mongoose");
const config = require("config");
const cors = require('cors');

var app = express();
app.use(cors());
app.options('*', cors());



const apiPort = config.get("mongodbPort") || 3080

const { createProxyMiddleware } = require('http-proxy-middleware');
const chalk = require('chalk');
app.use('/api', createProxyMiddleware({ target: `http://localhost:${apiPort}`, changeOrigin: true }));



const PORT = config.get("backendPort") || 3000

var staticPath = path.join(__dirname, '/dist');
app.use(express.static(staticPath));

// function loggerMiddleware (req, res, next) {
//   console.log(`[${req.method}]- ${req.url}`);
//   next();
// }
// app.use(loggerMiddleware);

// function authMiddleware (req, res, next) {
//   if (req.headers['authorization'] !== undefined) {
//     next();
//   } else {
//     res.statusCode = 401;
//     res.send("Error You need authorize");
//   }
// }
// app.use(authMiddleware);

// app.use("/users", usersRouter);

// app.post("/users/:id", authMiddleware, (req, res) => {
//   res.send("I have received you POST request");
// });


app.get('*',  (_req, res)=> {                                    //get=>use maybe
    res.sendFile(path.join(__dirname, '/dist', 'index.html'));
});


app.listen(PORT, function() {
  console.log(chalk.magenta(`Backend-server listening ${PORT}`));
});