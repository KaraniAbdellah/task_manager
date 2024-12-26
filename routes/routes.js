
// Use Express Framework & Body-Parser & Task Model
const express = require("./../src/node_modules/express");
const body_parser = require("./../src/node_modules/body-parser");
const Task = require("./../models/Task");
const PORT = 3000;


// Create API & Single Router
const app = express();


// Use Body-parser & Router
app.use(body_parser.json());



// Create POST Method
app.post("/api/tasks", async (request, response) => {

    console.log("🕵️‍♀️ Request Comme From Postman to GET Method");
    
    const task = new Task({
        _id: request.body._id,
        title: request.body.title,
        description: request.body.description,
        status: request.body.status,
    });
    // const task = new Task(request.body);
    
    // Save data on Database --> Task Model
    try {
        console.log(task);
        const AddedTask = await task.save();
        response.send.status(200).send({message: "💾 Sucess Saving Data"});
        console.log("💾 Sucess Saving Data");
    } catch (error) {
        console.log("❌ Can not save data to Database" + error);
        response.status(500).send({message: "❌ Failed Saving Data"});
    }

});



// Create GET Method
app.get("/api/tasks", async (request, response) => {

    try {
        const tasks = await Task.find();
        console.log(tasks);
        response.status(200).send({message: "✅ Get Data Succefully"});
    } catch (error) {
        console.log("❌ Failed Getting Data");
    }

});



// Create Post Method
app.put("/api/tasks/:id", async (request, response) => {
    
    const id = Number(request.params.id);
    const newTask = request.body;
    try {
        const UpdatedData = await Task.findByIdAndUpdate(id, newTask);
        response.status(200).send({message: "✅ Data Updated Succefully"});
        console.log("✅ Data Updated Succefully");
    } catch (error) {
        console.log("❌ Failed Update Data" + error);
        response.status(500).send({message: "❌ Failed Update Data"});
    }

});




// Make API Active
app.listen(PORT, () => {
    console.log("🚀 API listening to Port 🌐 " + PORT);
});



// Export All Routes
module.exports = app;

