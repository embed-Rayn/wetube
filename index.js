const express = require("express");
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res){
    res.send("Hello from home");
}

function hadleProfile(req, res){
    res.send("You are in my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
