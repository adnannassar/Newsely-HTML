const express = require("express");
const app = express();
const router =require("./routes/routes");
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(router);
app.set('view engine', 'ejs');
app.set("views","views");
app.use(bodyParser.json())

app.post("/hook", (req, res) => {
    console.log(req.body) // Call your action on the request here
    res.status(200).end() // Responding is important
})


app.listen(8040, function () {
    console.log("Server is runnig on:", "http://localhost:8040/")
});

