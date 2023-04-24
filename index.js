require("dotenv").config();
const express = require("express");
const path = require('path');
const app = express();
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials');
const cors = require("cors");
const connectDB = require('./config/connectDB');
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3000;

connectDB();

// and fetch cookies credentials requirement
app.use(credentials);

app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));

// built-in middleware for json 
app.use(express.json({limit: '50mb'}));


//middleware for cookies
app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// Routes
app.use('/', require('./routes/root'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use('/register', require('./routes/register'));
app.use('/inspection', require('./routes/inspections'));


// Catch all
// app.all('*', (req, res) => {
//     res.status(404);
//     if (req.accepts('html')) {
//         res.sendFile(path.join(__dirname, 'views', '404.html'));
//     } else if (req.accepts('json')) {
//         res.json({ "error": "404 Not Found" });
//     } else {
//         res.type('txt').send("404 Not Found");
//     }
// });


mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});