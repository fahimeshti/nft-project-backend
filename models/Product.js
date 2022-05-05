const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        creator: { type:String, required:true, unique:true },
        title: { type:String, required:true, unique:true },
        desc: { type:String, required:true },
        img: { type:String, required:true },
        creatorImg: { type:String, required:true },
        categories: { type: Array },
        price: { type: Number, required:true },
    },
    { timestamps:true }
)

module.exports = mongoose.model("Product", ProductSchema)