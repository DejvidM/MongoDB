const JokesFunctions = require('../controllers/jokes.controller');

module.exports = (app) => {
    app.get('/api/jokes' , JokesFunctions.findAllJokes);
    app.get('/api/jokes/:id' , JokesFunctions.FindOneJoke);
    app.patch('/api/jokes/:id', JokesFunctions.UpdateJoke);
    app.post('/api/jokes' , JokesFunctions.CreateJoke);
    app.delete('/api/jokes/:id' , JokesFunctions.deleteJoke); 
}