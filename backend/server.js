const express = require('express');
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose');

require('dotenv').config();

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();    
})

// routes
app.use('/api/workouts', workoutRoutes);

const PORT = process.env.PORT || 4000;

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(PORT, () => {
            console.log(`connected to db and listening on port ${PORT}`)
        });
    })
    .catch((err) => {
        console.log(err)
    })

