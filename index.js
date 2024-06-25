import express from "express";
import recipeRouter from "./routes/recipes.js";

// Create Express App
const app = express();

// Define routes
app.get('/', (req,res) => {
    res.json('welcome home');
});

app.post('/login', (req,res) => {
    res.json('Login successful');
});

app.patch('/products', (req,res) => {
    res.json('You are in the products section');
});

// Listen for incoming requests
app.listen(3000, () => {
    console.log('App listening on port 3000');
});

// Use routes
app.use(recipeRouter);