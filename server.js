const express = require('express');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

