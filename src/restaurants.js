import connectDb from "./connectDb.js";

export const addRestaurant = async (req, res) => {
    // Check if request is valid
    if(!req.body || !req.body.name || !req.body.address) {
        res.status(401).send('Invalid request');
        return;
    }
    // connect to Firestore
    const db = connectDb();
    // Prepare the data
    const newRestaurant = {
        name: req.body.name,
        address: req.body.address,
        rating: req.body.rating || 3,
        cuisine: req.body.cuisine || 'American',
    }
    // Add data to the restaurant collection
    try{
        const doc = await db.collection('restaurants').add(newRestaurant);
        // respond with success
        res.status(201).send('Restaurant created ' + doc.id);
    } catch (err){
    // respond with error
    res.status(500).send(err);
}
// db.collection('restaurant').add(newRestaurant)
// .then(doc => res.status(201).send('Restaurant created ' + doc.id))
// .catch(err => res.status(500).send(err))
}


export const getAllRestaurant = async (req, res) => {
    const db = connectDb();
    try{
        const snapshot = await db.collection('restaurants').get();
        const restaurantsArray = snapshot.docs.map(doc => {
            let restaurant = doc.data();
            restaurant.id = doc.id;
            return restaurant;
        })
        res.send(restaurantsArray);
    } catch (err){
        res.status(500).send(err);
    }
}