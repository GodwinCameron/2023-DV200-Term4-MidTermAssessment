const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const carRoute = require('./routes/car')


require('dotenv/config')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(carRoute)

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'GlenSpares', //Collection Name
}).then(() => console.log("Connected to GlenSpares DB"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server Started on port:${PORT}`)});

