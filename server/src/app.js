import express from 'express';
import cors from "cors";

import db from './connection.js';

const app = express();
const PORT = 8080;

app.use(cors());

app.get('/', async (req, res) => {
    const albums = (await db.collection('albums').find({}).limit(5).toArray());
    res.status(200).send(albums);
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}.`)
});