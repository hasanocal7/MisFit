// MODULES
const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');

const db = require('./models');
const pageRoute = require('./routes/pageRoute');
const userRoute = require('./routes/userRoute');

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
app.use(errorHandler);

// ROUTES
app.use('/', pageRoute);
app.use('/users', userRoute);

// SERVER CONNECTION ON PORT
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is Connected Port: ${PORT}`);
    });
})
