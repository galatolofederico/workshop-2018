class List {
    constructor(){
        this.listfile = "/tmp/list.json"
        this.list = []
        this.loadList()
    }

    loadList(){
        this.list = JSON.parse(fs.readFileSync(this.listfile))
    }

    saveList(){
        fs.writeFileSync(this.listfile, JSON.stringify(this.list))
    }
}

module.exports = List