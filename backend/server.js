const express = require('express');
const workoutRoutes = require('./routes/workouts')

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

// listen for requests
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});

