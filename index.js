import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(__dirname + "/program"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/program/index.html");
});

app.listen(3000, () => {
    console.log("listening to port 3000");
});
