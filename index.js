const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dhairya:vitb@dhairya-cluster.m86tlsf.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    app.listen(5000, () => {
        console.log("Listening on port 5000");
    })
})
.catch((e) => {
    console.log(e);
    console.log("Error connecting to the DB !!");
})

