/*
list.js

GET /list
POST /list


todo.js
DELETE /todo/:id
PUT /todo/:id

*/



express = require("express")

app = express()

app.get("/test", (req, res) => {
    res.send("ciao")
})


app.listen(3000)