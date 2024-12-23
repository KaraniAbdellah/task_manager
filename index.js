

const mongoose = require("./pack-mongoose/node_modules/mongoose");

// Connect to Mongo DB
mongoose.connect("mongodb://localhosts:27017/test").then(()=> {
    console.log("MongoDb Connected");
}).catch((err) => {
    console;log("error", err);
});


// Define The Rules of the data that will send to the DataBase
const tutShema = new mongoose.Schema({
    name:  {
        type: String,
        required: true
    }
});


// Create a Collection (all document will in collection)
const collection = new mongoose.model("myModel", tutShema);





