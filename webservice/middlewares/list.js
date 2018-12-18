express = require("express")
listloader = require("./listloader.js")

router = express.Router()

router.use(express.json())
router.use(listloader)

router.get("/list", (req, res) => {
    res.send({
        list: req.list.list
    })
})

router.post("/list", (req, res) => {
    req.list.list.push(req.body.todo)
    req.list.saveList()
    res.end()
})


module.exports = router