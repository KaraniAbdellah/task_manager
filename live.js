
// import mongoose --> npm install mongoose
const mongoose = require("./pack-mongoose/node_modules/mongoose");

const Schema = mongoose.Schema({
    name: String
});


const Collection = mongoose.model('data_product', Schema);

mongoose.connect("mongodb://127.0.0.1:27017/test").then(function() {
    console.log("Conected to Database");
}).catch((err) => {
    console.log("Does not connect");
});
































// // Connect To DataBase
// const mongoose = require("./pack-mongoose/node_modules/mongoose");

// // Create Schema
// const Schema = new mongoose.Schema({
//     name: String
// });



// Connect to Database
mongoose.connect("mongodb://127.0.0.1:27017").then(function() {
    console.log("Connected to Database Succefully");
}).catch((err) =>  {
    console.log("error", err);
});






