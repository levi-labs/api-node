const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/db_buku", async(err)=>{
        if(err) throw err;
        console.log("conncted to db")
    });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Koneksi Database Gagal"));

db.on("open", () => {
    console.log("Koneksi Berhasil");
});