// console.log('Hello World!');

const express = require('express');
const app = express();


app.set("view engine", "ejs");
// app.use(logger)

app.get('/', logger,(req, res) => {
    console.log('Hello World!');
    // res.status(500).json({ message: 'Error' });
    // res.json({ message: 'Error' });
    // res.download("server.js")
    res.render("index", { text: 'Kami'})
})


const userRouter = require('./routes/users');

app.use('/users', userRouter);
function logger(req, res, next) {
    console.log(req.originalUrl);
    next()
}



app.listen(3000);
