function Mongo(connectionString) {
    this.connectionString = connectionString   
}
Mongo.prototype.initDB = function(){
    return {
        run(query){
            //running query
        }
    }
}
Mongo.prototype.connect = function(onConnect) {
    const mongo = this.initDB()
    onConnect(mongo)
}
function Query() {}
Query.prototype.setConnection = function(mongoRef){
    debugger
    this.mongoRef = mongoRef
}
Query.prototype.runQuery = function(query){
    this.mongoRef.run(query)
}
const mng = new Mongo("http://localhost:3000/connect")
const query = new Query()
mng.connect(query.setConnection.bind(query))






console.log('Nice job! your code is compiled Successfully')