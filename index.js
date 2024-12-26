// Connect To Database
const mongoose = require("./src/node_modules/mongoose");
const Task = require("./models/Task");

mongoose.connect("mongodb://127.0.0.1:27017/Tasks").then(() => {
    console.log("✅ Connected Succefully to Database");
}).catch((err) => {
    console.log("❌ Can Not Connect to Database");
});

console.log(Task);



// Use API
const App = require("./routes/routes");






