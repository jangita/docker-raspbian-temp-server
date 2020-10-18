const express = require('express')
const fs = require('fs');
const port = 16111

const app = express()

app.use(express.json()); 

app.post('/temp', (req, res) => {
    const d = new Date();
    const n = '/data/' + d.toISOString().replace(/:/g,'').replace('.','-') + '.txt';

    const data = JSON.stringify(req.body, null, 4);
    fs.createWriteStream(n).write(data);
    console.log("JSON data is saved.");
    res.end();
})

app.listen(port, () => {
    console.log(`Temp monitor listening at http://localhost:${port}`)
})
