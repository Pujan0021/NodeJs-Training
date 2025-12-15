let express = require("express");
let port = "5000";
let app = express();
app.use((req, res, next) => {
    console.log("-----MiddleWare---------");
    next();
})
app.get("/", (req, res) => {
    res.send("Hello From server...")
});
app.listen(port, () => {
    console.log("....Server Started....")
});