let express = require("express");
let port = "8000";
let app = express();
app.get("/", (req, res) => {
    res.send("Hello From server...")
})
app.listen(port, () => {
    console.log("....Server Started....")
})