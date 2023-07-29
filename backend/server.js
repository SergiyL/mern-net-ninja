const express = require('express');

require('dotenv').config();

// express app
const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();    
})

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'});
});

const PORT = process.env.PORT || 4000;

// listen for requests
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});

