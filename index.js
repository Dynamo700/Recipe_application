import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import express from 'express';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDb, getDb } from './db.js';

 
const app = express();

const currentModuleURL = new URL(import.meta.url);
const currentModulePath = fileURLToPath(currentModuleURL);
const currentDir = dirname(currentModulePath);

app.use(express.static(join(currentDir, 'recipe-app', 'build')));

const corsOpts = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
}

app.use(cors(corsOpts));

app.use(express.json());

/**
 * -Delete a recipe through the /delete path
 * -Add a recipe through the add path
 * -Connect them all to react
 * -Create an image upload
 * 
 */

app.use(bodyParser.urlencoded({ extended: false}))

app.post('/this_is', (req, res) => {
    res.send(`This is a ${req.body.name}`);
});

app.get('/recipes', async (req, res) => {
    const db = getDb() //coneect to the recipes database
    const collection = db.collection("recipeList")

    const allRecipes = await collection.find({}).toArray()

    res.send(allRecipes); //what the user will get
})

app.post('/add', async (req, res) => {
    const db = getDb()
    const collection = db.collection("recipeList")

    const recipe = req.body; //all info submitted in the form

    collection.insertOne(recipe)

    res.send("Success!")
})

app.delete('/delete/:recipeName', async (req, res) => {
    const db = getDb()
    const collection = db.collection("recipeList")

    const recipeName = req.params.recipeName

    console.log(recipeName)

    await collection.deleteOne({ name: recipeName}).then( (message) => {
        res.send(message);
    })
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

app.get('/*', (req, res) => {
    res.sendFile(join(currentDir, 'recipe-app', 'build', 'index.html'));
})

app.listen(8000, async () => {
    await connectDb()

    console.log("The server is listening on port 8000!")
});