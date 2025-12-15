let express = require("express");
let port = "5000";
let app = express();
app.use((req, res, next) => {
    console.log("-----MiddleWare---------");
    next();
})
// Custom MiddleWare
const middleWare = (req, res, next) => {
    console.log("This is a custom middleware");
    next();
}
app.use(middleWare);
app.get("/", (req, res) => {
    res.send("Hello From server...")
});
app.listen(port, () => {
    console.log("....Server Started....")
});