chai = require("chai")
chai_http = require("chai-http")
List = require("../utils/list.js")

chai.use(chai_http)

list = new List()
list.clear()

should = chai.should()

app = require("../webservice.js")


describe("prima GET /list ", () => {
    it("Should return an empty array", done => {
        chai.request(app)
        .get("/list")
        .end((err, res) => {
            res.body.list.should.be.a("array")
            res.body.list.length.should.be.eql(0)
            done()
        })
    })
})


describe("POST /list ", () => {
    it("Should add an element to the list", done => {
        chai.request(app)
        .post("/list")
        .send({
            todo: {
                value: "prova"
            }
        })
        .end((err, res) => {
            list.loadList()
            list.list.length.should.be.eql(1)
            done()
        })
    })
})