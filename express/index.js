const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();

const PORT = 5000;

app.listen(PORT, function () {
    console.log(`Server is running on PORT: ${PORT}`);
})

app.use(cors())
app.use(express.json())


let bookmarks = [];

router.get('/', (req, res) => {
    res.json(bookmarks)
})

router.post('/', (req, res) => {
    console.log(req.body)
    bookmarks.unshift(req.body);
    res.json(bookmarks[0])
})


app.use('/', router);

module.exports = app;