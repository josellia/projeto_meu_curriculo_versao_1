const express = require('express');
const path = require('path');


const PORT = 3000;
const app = express();

//Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));



// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Routes
app.use('/api', require('./router/curriculo'));


app.listen(PORT, err => {
    console.log(`Server is listening on ${PORT}`);
});