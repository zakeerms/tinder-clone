import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name:String,
    lastName:String,
    imgUrl:String
})

export default mongoose.model('cards',cardSchema);