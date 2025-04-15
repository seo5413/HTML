const express = require('express');
const morgan = require('morgan');

const userRouter = require('./router/2.userRouter');
const productRouter = require('./router/3.productRouter');

const app = express();

const port = 3000;

app.use(morgan('dev'));

app.use('/user', userRouter);
app.use('/product', productRouter);




app.listen(port, ()=>{
    console.log('서버 레디');
})