List = require("../utils/list.js")

module.exports = (req, res, next) => {
    list = new List()
    list.loadList()
    req.list = list
    next()
}