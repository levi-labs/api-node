const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema (
    {
        pengarang: {type:String, required: true},
        judul: {type: String, required:true},
        harga: {type: Number, required: true},
        stok: {type: Number, required: true}
    },
    {   collection: "koleksiBuku" } 

);

module.exports = mongoose.model("BukuModel",BookSchema);