const Express = require("express");
const BodyParser = require("body-parser");
const mongo = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const dbName = "thermo-db";
//const url = `mongodb://localhost:27017`;
const url = "mongodb+srv://admin:12345abcde@db-fdekn.mongodb.net/test?retryWrites=true";

var app = Express();
var port = process.env.PORT || 3000;

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
    if (error) throw error;
    database = client.db("thermo-db");
    collection = database.collection("thermocollation");
    console.log(`Connected to ${dbName}`);
})

app.get("/", (req, res) => {
    res.send('None shall pass');
});

app.post("/addData", (req, res) => {
    res.status(200);
    database.collection("thermocollation").insertOne(req.body, (err, result) => {
        if (err) throw err;
        console.log("Saved");
        res.redirect("/");
    })
})

app.get("/getData", (req, res) => {
    res.status(200);
    database.collection("thermocollation").find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
