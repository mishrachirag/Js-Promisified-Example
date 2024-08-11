const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/read-file', (req, res) => {
    const filePath = path.join(__dirname, 'file.txt');

    fs.readFile(filePath, 'utf8')
        .then((data) => {
            res.json({ content: data });
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error reading file' });
        });
});

app.get('/delay/:ms', (req, res) => {
    const ms = parseInt(req.params.ms, 10);

    new Promise((resolve) => setTimeout(resolve, ms))
        .then(() => {
            res.json({ message: `${ms} milliseconds have passed` });
        });
});

app.get('/fetch-data', (req, res) => {
    Promise.resolve({ title: 'Fetch example', content: 'This is a sample data fetched from the server.' })
        .then((data) => {
            res.json(data);
        });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
