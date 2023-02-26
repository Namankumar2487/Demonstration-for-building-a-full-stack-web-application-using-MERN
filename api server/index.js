require("./config");
const apis = require('./apis');
const express=require('express');
const app = express();
const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json());

// res.writeHead(200, {
//     'Content-Type': 'text/plain',
//     'Access-Control-Allow-Origin' : '*',
//     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
// });

app.get("", async (req, res) => {
    let data = await apis.find();
    console.log(data);
    res.send(data);
});

app.post("", async (req, res) => {
    let data = new apis(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
})

app.delete("/delete/:_id", async (req, res) => {
    let data = await apis.deleteOne(req.params);
    res.send(data);
})

app.put("/update/:id", async (req, res) => {
    console.log(req.params);
    let data = await apis.updateOne(
        req.params,
        {$set: req.body}
    );
    console.log(data);
    res.send(data);
})

app.listen(4000);
