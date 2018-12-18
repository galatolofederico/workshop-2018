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
                value: "prova 1"
            }
        })
        .end((err, res) => {
            list.loadList()
            list.list.length.should.be.eql(1)
            done()
        })
    })
})

describe("POST /list second time ", () => {
    it("Should add another element to the list", done => {
        chai.request(app)
        .post("/list")
        .send({
            todo: {
                value: "prova 2"
            }
        })
        .end((err, res) => {
            list.loadList()
            list.list.length.should.be.eql(2)
            done()
        })
    })
})

describe("seconda GET /list ", () => {
    it("Should return an array with length 2", done => {
        chai.request(app)
        .get("/list")
        .end((err, res) => {
            res.body.list.should.be.a("array")
            res.body.list.length.should.be.eql(2)
            done()
        })
    })
})

describe("PUT /todo/1 ", () => {
    it("Should modify the second element", done => {
        chai.request(app)
        .put("/todo/1")
        .send({
            todo: {
                value: "NUOVO"
            }
        })
        .end((err, res) => {
            list.loadList()
            list.list.length.should.be.eql(2)
            list.list[1].value.should.be.eql("NUOVO")
            done()
        })
    })
})


describe("DELETE /todo/1 ", () => {
    it("Should delete the second element", done => {
        chai.request(app)
        .delete("/todo/1")
        .end((err, res) => {
            list.loadList()
            list.list.length.should.be.eql(1)
            list.list[0].value.should.be.eql("prova 1")
            done()
        })
    })
})

