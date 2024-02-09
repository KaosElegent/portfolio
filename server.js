const express = require('express');
const path = require('path');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));

app.use('/public', express.static(path.join(__dirname, "public")));
app.use('/src', express.static(path.join(__dirname, "src")));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

