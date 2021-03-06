const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const ProductRouter = require('./routes/product');
const categoryRouter = require('./routes/category');
const orderRouter = require('./routes/order');
const userRouter = require('./routes/users');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const auth = require('./auth');
const cors = require('cors');


const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.options('*', cors());
app.use(cors());
app.use(express.urlencoded({extended: true }));
app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then((db) => {
        console.log("Successfully connected to MongodB server");
    }, (err) => console.log(err));

app.use('/users', userRouter);
app.use('/users/categories', categoryRouter);
app.use('/users/product', ProductRouter);
app.use('/users/order', orderRouter);
app.use('/upload', uploadRouter);

// app.use(auth.verifyUser);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ status: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});

//cors indicates protocol. is it http or https.
