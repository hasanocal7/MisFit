// MODULES
const express = require('express');

// MIDDLEWARE MODULES
const cors = require('cors');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// SESSION MODULES
const RedisStore = require("connect-redis").default
const session = require("express-session");
const {createClient} = require("redis");

// Initialize client.
const redisClient = createClient()
redisClient.connect().catch(console.error)

// DB
const db = require('./models');

// ROUTE MODULES
const pageRoute = require('./routes/pageRoute');
const userRoute = require('./routes/userRoute');
const trainingRoute = require('./routes/trainingRoute');

// APPLICATION
const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    session({
        secret: 'my_keyboard_cat',
        resave: false,
        saveUninitialized: false,
        store: new RedisStore({client: redisClient}),
    })
);
app.use(methodOverride('_method'));

// Global Variable
global.userIN = null;

// ROUTES
app.use('*', (req, res, next) => {
    userIN = req.session.userID;
    next();
});
app.use('/', pageRoute);
app.use('/users', userRoute);
app.use('/trainings', trainingRoute);

// SERVER CONNECTION ON PORT
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is Connected Port: ${PORT}`);
    });
})
