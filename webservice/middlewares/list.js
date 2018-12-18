express = require("express")
List = require("../utils/list.js")


list = new List()
router = express.Router()

router.get("/list", (req, res) => {
    list.loadList()
    res.send(list.list)
})

router.post("/list", (req, res) => {
    list.loadList()
    list.list.push(req.body.todo)
    list.saveList()
})