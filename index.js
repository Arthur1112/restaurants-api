import express from 'express';
import cors from 'cors';
import { addRestaurant, getAllRestaurant } from './src/restaurants.js';

const app = express();
app.use(cors());
app.use(express.json());

// Routes GO HERE... -- Defining which requests are allowed -- 
app.post('/restaurants', addRestaurant);
app.get('/restaurants', getAllRestaurant);

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000...')
});

