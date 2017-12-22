const express = require('express');
const TodoController = require('./controllers/TodoController');

const app = express();

// Setup view engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('./public'));

// Fire controllers
TodoController(app);

// Listen to port
app.listen(3000);
console.log('Ok, you are listening to port 3000');
