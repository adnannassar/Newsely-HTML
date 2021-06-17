const express = require("express");
const app = express();
const router =require("./routes/routes");
app.use(express.static("public"));
app.use(router);
app.set('view engine', 'ejs');
app.set("views","views");


const port = process.env.port || 3000;
app.listen(port, function () {
    console.log("Server is running on:", port)
});

