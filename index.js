


// // "mongodb://localhosts:27017/test" 
// // "mongodb://127.0.0.1:27017/test"
// // "mongodb://0.0.0.0:27017/test"


// const mongoose = require("./pack-mongoose/node_modules/mongoose");

// // Connect to Mongo DB
// mongoose.connect("mongodb://127.0.0.1:27017/test").then(()=> {
//     console.log("MongoDb Connected");
// }).catch((err) => {
//     console.log("error", err);
// });


// // Define The Rules of the data that will send to the DataBase
// const tutShema = new mongoose.Schema({
//     name:  {
//         type: String,
//         required: true
//     }
// });


// // Create a Collection (all document will in collection)
// // DB name & name of collection should be deffrent
// const collection = new mongoose.model("myModel", tutShema);
// // let data = {
// //     name: "XOXOXO"
// // } 
// // collection.insertMany([data]);

// // get the data from DB
// const docs = collection.find({}, "name");
// console.log(docs);




const express = require('./pack-express/node_modules/express');
const mongoose = require('./pack-mongoose/node_modules/mongoose');

const server = express(); // create server

// Middleware to parse incoming JSON requests
server.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/test")
    .then(() => {
        console.log("Connected Successfully to My Data Base");
    })
    .catch((err) => {
        console.log("Error", err);
    });

// Define Schema: Structure for the data that will be stored
const schema = new mongoose.Schema({
    name: String,
    email: String,
    id: Number,
});

// Create Collection (Model)
const Collection = mongoose.model("user_data", schema);

// Post Request
server.post("/post", async (req, res) => {
    console.log("Inside POST function");

    // Use data from request body if needed, else hardcoded as example
    const data = new Collection({
        name: req.body.name || "ahmed",
        email: req.body.email || "ahmed.ali@gmail.com",
        id: req.body.id || 1,
    });

    try {
        const savedData = await data.save(); // Save data to the database
        res.json(savedData); // Return the saved data as a response
    } catch (err) {
        console.error("Error saving data:", err);
        res.status(500).send("Error saving data");
    }
});

// Make server active --> listens for any incoming requests or responses
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
