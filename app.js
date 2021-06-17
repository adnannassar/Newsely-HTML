const express = require("express");
const app = express();
const router =require("./routes/routes");
app.use(express.static("public"));
app.use(router);
app.set('view engine', 'ejs');
app.set("views","views");



app.listen(8080, function () {
    console.log("Server is runnig on:", "http://localhost:8040/")
});

