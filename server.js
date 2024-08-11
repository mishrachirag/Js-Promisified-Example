const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/read-file', (req, res) => {
    const filePath = path.join(__dirname, 'file.txt');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error reading file' });
            return;
        }
        res.json({ content: data });
    });
});


app.get('/delay/:ms', (req, res) => {
    const ms = parseInt(req.params.ms, 10);
    setTimeout(() => {
        res.json({ message: `${ms} milliseconds have passed` });
    }, ms);
});


app.get('/fetch-data', (req, res) => {
    res.json({ title: 'Fetch example', content: 'This is a sample data fetched from the server.' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
