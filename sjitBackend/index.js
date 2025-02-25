const express = require('express');

const app = express();
app.get("/", (req, res) => { //req->request res->response
    res.send("<h1> <i>Server Started Successfully!</i></h1>");
})
const PORT = 3001;

app.get("/static", (req, res) => {
    res.sendFile("E:\\MERN\\index.html");

})
app.listen(PORT, () => console.log("Server Started Successfully"))