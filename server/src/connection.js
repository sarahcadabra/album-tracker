
import { MongoClient } from 'mongodb';

import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.ATLAS_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

let connection;

try {
    connection = await client.connect();
} catch (e){
    console.log(e);
}

const db = connection.db('album_tracker');

export default db;