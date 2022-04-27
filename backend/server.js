const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json())
app.use(cors());

var server = app.listen(8080,()=>{
    console.log("listening to server")
})

const PartiesSchema = new mongoose.Schema({
    name: String,
    abbr: String,
    logo: String,
  });

const parties = new mongoose.model('parties',PartiesSchema);


const CandidateSchema = new mongoose.Schema({
    name: String,
    cons: String,
    party: String,
  });

const Candidates = new mongoose.model('Candidates',CandidateSchema);



mongoose.connect('mongodb+srv://admin:qwerty123456@cluster0.mjsuh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.once("open", function () {
  console.log("Connected successfully");
});


app.post('/addparty',(req,res)=>{
    console.log(req.body)
    const party = new parties({name:req.body.name,abbr:req.body.abbr,logo:req.body.image})
    party.save()
    res.send({"message":"cool beans"})
})


app.get('/getparties',async (req,res)=>{
    prts = await parties.find();
    console.log(prts)
    res.json(prts)
})

app.post('/addcandidate',(req,res)=>{
    console.log(req.body)
    const cand = new Candidates({name:req.body.name,cons:req.body.cons,party:req.body.party})
    cand.save()
    res.send({"message":"cool beans - add cand"})
})


app.get('/getcandidates',async (req,res)=>{
    prts = await Candidates.find();
    console.log(prts)
    res.json(prts)
})