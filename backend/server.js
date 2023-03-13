import express, { json, urlencoded } from 'express';
import cors from 'cors';
import { connectToServer } from "./mongo/conn.js";

const app = express();
const port = process.env.PORT || 3002;

app.use(cors());
app.use(json());

app.get('/', async (req, res) => {
    res.send("Welcome to the server");
});

connectToServer(function (err) {
    if (err) {
        console.error(err);
        process.exit();
    }

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});

