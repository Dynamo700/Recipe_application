import exp from 'constants.js';
import express from 'express.js';
import { MongoClient } from 'mongodb.js';
import bodyParser from 'body-parser.js';


//PUT /articles/learn-react/upvote

const { connectDb, getDb } = require('./db')

const app = express();

//db connection
connectDb((err) => {
    if(!err) {
        app.listen(8000, async () => {
            console.log("The server is listening on port 8000!")
        })
        db = getDb()
    }
})

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    res.send(`hello`);
});

app.post('/this_is', (req, res) => {
    res.send(`This is a ${req.body.name}`);
});

app.get('api/recipes/:name', async (req, res) => {
    const { name } = req.params
    
    
    const recipe = await db.collection('recipes').findOne({})
})

// app.post('api/removeRecipe', (req, res) => {
//     console.log(req.body.recipename);
//     let adjustedRecipes = [];
//     for (let i=0; i<recipesInfo.length; i++ ) {
//         if( recipesData[i].name != req.body.recipesname) {
//             adjustedRecipes.push(recipesData[i]);
//         }
//         recipesData = adjustedRecipes;
//     }
// })

app.post('/api.recipes/:name/desciption', (req, res) => {
    const { name } = req.params;
    const { postedBy, text} = req.body;


    const recipe = recipesInfo.find(a => a.name === name);


    if (recipe) {
        recipe.comments.push({ postedBy, text });
        res.send(recipe.description);
    } else {
        res.send('That article doesn\'t exist')
    }
});

// app.post('/hello', (req, res) => {
//     res.send(`Hello ${req.body.name}!`);
// });


// app.get('/hello/:name', (req, res) => {
//     const name  = req.params.name;
//     res.send(`Hello ${name}!!`);
// });


app.listen(8000, async () => {
    console.log("The server is listening on port 8000!")
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    await client.connect();

    const db = client.db('recipe-site-db')
});
