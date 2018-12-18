express = require("express")
listloader = require("./listloader.js")

router = express.Router()

router.use(express.json())
router.use(listloader)

router.put("/:id", (req, res) => {
    req.list.list[req.params.id] = req.body.todo    
    req.list.saveList()
})

router.delete("/:id", (req, res) => {
    req.list.list.splice(req.params.id, 1)
    req.list.saveList()
})


module.exports = router