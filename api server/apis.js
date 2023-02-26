const mongoose = require('mongoose');

const apisSchema = new mongoose.Schema({ id: Number, title: String, completed: Boolean });
module.exports= mongoose.model("apis",apisSchema);
