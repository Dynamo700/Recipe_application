const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
    connectDb: (conn) => {
        MongoClient.connect('mongodb://localhost:27017/recipes')
            .then((client) => {
                dbConnection = client.db()
                return conn()
            })
            .catch(err => {
                console.log(err)
                return conn(err)
            })
    },
    getDb: () => dbConnection
}