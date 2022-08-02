const express = require("express");
const cors =require("cors");
const morgan = require("morgan");


require("./db.js");

const app = express();
const port = 4000;
const routeAkses = require("./routes");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/book", routeAkses);

app.listen(port, () => {
    console.log("server berhasil di jalankan pada port : " + port)
});