import { MongoClient} from "mongodb"

let dbConnection

export const connectDb = async () => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017') //establish a connection to Mongo
        dbConnection = await client.db("recipes")

        console.log("Connected Successfully to the database.")
    } catch (error){
        console.log("Error connecting to the database: ", error)
    }


    
}

export const getDb = () => {
    if(!dbConnection){
        console.log("No db connection.")
        return null
    }

    return dbConnection

}