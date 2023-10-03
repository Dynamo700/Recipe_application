import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

import { connectDb, getDb } from './db.js';

const app = express();

app.use(express.json());

/**
 * -Delete a recipe through the /delete path
 * -Add a recipe through the add path
 * -Connect them all to react
 * -Create an image upload
 * 
 */

app.use(bodyParser.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.send(`hello`);
});

app.post('/this_is', (req, res) => {
    res.send(`This is a ${req.body.name}`);
});

app.get('/recipes', async (req, res) => {
    const db = getDb() //coneect to the recipes database
    const collection = db.collection("recipeList")

    const allRecipes = await collection.find({}).toArray()

    res.send(allRecipes); //what the user will get
})

app.post('api.recipes/:name/description', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    const recipe = recipesInfo.find(a => a.name === name);

    if (recipe) {
        recipe.comments.push({ postedBy, text });
        res.send(recipe.description);
    } else {
        res.send('That article does\'t exist')
    }
});

app.listen(8000, async () => {
    await connectDb()

    console.log("The server is listening on port 8000!")
});