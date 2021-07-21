const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require("./config/database");
const path = require('path');

dotenv.config({path: './config/config.env'})
 connectDB();

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Mounted Routes
const tranasctionsRouter = require('./routes/transactions');
const categoryRouter = require('./routes/category');

app.use('/api/transactions', tranasctionsRouter)
app.use('/api/categories', categoryRouter)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
  }
  
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))