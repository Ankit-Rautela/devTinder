const express = require("express");

const app = express();

app.use(("/boys"),(req,res) => {
    res.send("Hello Boys");
})

app.listen(3000, () => {
    console.log("Server started!")
});