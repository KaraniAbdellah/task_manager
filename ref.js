// Import mongoose to interact with MongoDB
const mongoose = require("./pack-mongoose/node_modules/mongoose");
const MongoDbUrl = "mongodb://127.0.0.1:27017/test"; 



// // Middleware to parse JSON data in incoming requests
// server.use(express.json()); // This allows you to send JSON data in the request body

// Define data that will be store in DB
const tutShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

// Create a collection using the schema
const collection = new mongoose.model("myCollection", tutShema);

// Connect to MongoDB
mongoose.connect(MongoDbUrl).then(function() {
    console.log("MongoDb Connected");
}).catch((err) => {
    console.log("error", err);
});


// Import express to create the server
const express = require("./pack-express/node_modules/express");
const server = express();
const port = 3000;




// // Define a POST route to handle incoming data
server.post('/post', async (req, res) => {
    const data = new collection({
        name: req.body.name // get data from the request body
    });

    try {
        const savedData = await data.save(); // Save the data to MongoDB
        res.json(savedData); // Send saved data back as a response
    } catch (err) {
        res.status(500).send("Error saving data");
    }
});


// // Define a GET route to retrieve data from MongoDB
// // http://localhost:3000/get
// server.get("/get", async (req, res) => {
//     try {
//         const data = await collection.find(); // Get all documents from the collection
//         res.json(data); // Send the data back as a response
//     } catch (err) {
//         res.status(500).send("Error fetching data");
//     }
// });


// // Define a POST route to add data to MongoDB
// // http://localhost:3000/post --> post tha data that you want to body in postman
// server.post("/post", async (req, res) => {
//     const data = new collection({
//         name: req.body.name
//     });

//     try {
//         const savedData = await data.save();
//         res.json(savedData);
//     } catch (err) {
//         res.status(500).send("Error saving data");
//     }
// });

// // Define a PUT route to update data in MongoDB --> id for object that will be updated
// // http://localhost:3000/put/676a9b288529e38abc4920f4
// server.put("/put/:id", async (req, res) => {
//     try {
//         const updatedData = await collection.findByIdAndUpdate(
//             req.params.id,
//             { name: req.body.name },
//             { new: true }
//         );
//         res.json(updatedData);
//     } catch (err) {
//         res.status(500).send("Error updating data");
//     }
// });

// // Define a DELETE route to remove data from MongoDB
// server.delete("/delete/:id", async (req, res) => {
//     try {
//         await collection.findByIdAndDelete(req.params.id);
//         res.send("Data deleted successfully");
//     } catch (err) {
//         res.status(500).send("Error deleting data");
//     }
// });


// // Start the server
// server.listen(port, function() {
//     console.log("Server is listening on port", port);
// });





