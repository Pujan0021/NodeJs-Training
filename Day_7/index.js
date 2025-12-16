let express = require("express");
let port = 5000;
let app = express();

app.get("/", (req, res, next) => {
    const error = new Error("Error Occured");
    next(error);

});
app.use((err, req, res, next) => {
    console.log("Error:", err.message);
    res.send("Error Occured!");
})
app.listen(port, () => {
    console.log("....Server Started....")
});
