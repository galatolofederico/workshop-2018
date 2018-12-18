/*
list.js

GET /list 
    Ritorna la lista dei todo
POST /list
    Aggiunge un nuovo todo, il valore va passato nel corpo della richiesta come
        {
            todo: {
                value: "prova 1"
            }
        }


todo.js

DELETE /todo/:id
    Rimuove un todo aggiunto precedentemente, il secondo "parametro" e' l'indice nella lista 

PUT /todo/:id
    Modifica un todo aggiunto precedentemente, il nuovo valore va passato nel corpo (come con il POST)

*/



express = require("express")
list_router = require("./middlewares/list.js")
todo_router = require("./middlewares/todo.js")

app = express()

app.use("/", list_router)
app.use("/todo", todo_router)

//app.listen(3000)

module.exports = app
