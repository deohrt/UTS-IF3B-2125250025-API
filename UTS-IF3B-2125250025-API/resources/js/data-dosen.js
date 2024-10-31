const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, dosen: "Ali" },
        { id: 2, dosen: "Bobi" }
    ]);
});


app.post('/api/users', (req, res) => {
    const newUser = req.body;
    newUser.id = Math.floor(Math.random() * 100);
    res.status(201).json(newUser);
});


app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const updatedUser = req.body;
    updatedUser.id = userId;
    res.json(updatedUser);
});