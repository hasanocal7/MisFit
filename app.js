// MODULES
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const pageRoute = require('./routes/pageRoute');

// APPLICATION
const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// ROUTES
app.use('/', pageRoute);

// SERVER CONNECTION ON PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is Connected Port: ${PORT}`);
});