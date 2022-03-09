const express = require('express');
const router = express.Router();
const { items } = require('./data/database.json');

router.get('', (req, res) => {
    res.json({item: items});
});

router.post('', (req, res) => {
    const newItem = { name: req.body.name, price: req.body.price };
    items.push(newItem);
    res.status(201).json({ item: newItem});
});

router.get('/:name', (req, res) => {
    const foundItem = items.find(n => n.name === req.params.name);
    res.json({item: foundItem});
})

router.patch('/:name', (req, res) => {
    const foundItem = items.find(n => n.name === req.params.name);

    foundItem.name = req.body.name;

    res.json({ item: foundItem });
})

router.delete('/:name', (req, res) => {
    const foundItem = items.findIndex(n => n.name === req.params.name);
    items.splice(foundItem, 1);
    res.json({message: 'deleted'});
})