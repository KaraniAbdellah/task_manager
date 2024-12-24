// Connect To DataBase
const mongoose = require("./pack-mongoose/node_modules/mongoose");

// Create Schema
const Schema = new mongoose.Schema({
    name: {
        type: String
    }
});


// Create Collection
const Collection = mongoose.model("user_data", Schema);

// Connect to Database
mongoose.connect("mongodb://127.0.0.1:27017").then(function() {
    console.log("Connected to Database Succefully");
}).catch((err) =>  {
    console.log("error", err);
});







// Create Server
const app = require("./pack-express/node_modules/express");
const server = app();
const port = 3000;


try {
    const savedData = data.save(); // Save the data to MongoDB
    console.log("Data saved");
} catch (err) {
    console.log("Error saving data");
}



// // Make Server Active
server.listen(port, function() {
    console.log("server listen to port", port);
});







