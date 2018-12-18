/*
list.js

GET /list
POST /list


todo.js
DELETE /todo/:id
PUT /todo/:id

*/



express = require("express")
list_router = require("./middlewares/list.js")
todo_router = require("./middlewares/todo.js")

app = express()

app.use("/", list_router)
app.use("/todo", todo_router)

//app.listen(3000)

module.exports = app