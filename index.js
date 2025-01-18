const express = require("express");
const cors = require("cors");
// require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000;
app.use(cors({
  origin: ["http://localhost:5173"]
}));
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://fitnessCenter:W9mEPP8mxzXO12y9@cluster0.r7awt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
   const userCollection = client.db("fitnessDB").collection("users");
   const newsletterCollection = client.db("fitnessDB").collection("newsLetter");
   const allTrainersCollection = client.db("fitnessDB").collection("allTrainers");
   const paymentCollection = client.db("fitnessDB").collection("payment");
   const becomeATrainerCollection = client.db("fitnessDB").collection("becomeATrainer");
   const addAClassCollection = client.db("fitnessDB").collection("addAClass");
  
  //  users collection
    app.post("/users", async(req, res)=>{
      const user = req.body;
      console.log(user)
      const cursor = {email: user?.email}
      const alreadyExist = await userCollection.findOne(cursor)
      if(alreadyExist){
        return res.send("already exist")
      }
      const result = await userCollection.insertOne(user)
      res.send(result)
    })

    // newsletter collection

    app.post("/newsletter", async(req, res)=>{
      const news = req.body;
      const result = await newsletterCollection.insertOne(news)
      res.send(result)
    })
    app.get("/newsletter", async(req, res)=>{
      const result = await newsletterCollection.find().toArray()
      res.send(result)
    })

    // all trainers collection

    app.get("/all-trainers", async(req, res)=>{
      const result = await allTrainersCollection.find().toArray();
      res.send(result)
    })
    app.get("/all-trainers/:id", async(req, res)=>{
      const id = req.params.id;
      const cursor = {_id: new ObjectId(id)}
      const result = await allTrainersCollection.findOne(cursor);
      res.send(result)
    })

    // payment collection
    app.post("/payment", async(req, res)=>{
      const cursor = req.body;
      const result = await paymentCollection.insertOne(cursor)
      res.send(result)
    })

    // become a trainer
    app.post("/become-a-trainer", async(req, res)=>{
      const become = req.body;
      console.log("become", become)
      const result = await becomeATrainerCollection.insertOne(become);
      res.send(result)
    })
  
    app.get("/become-a-trainer", async(req, res)=>{
      const result = await becomeATrainerCollection.find().toArray();
      res.send(result)
    })
    app.get("/become-a-trainer/:id", async(req, res)=>{
      const id = req.params.id;
      const cursor = {_id: new ObjectId(id)};
      const result = await becomeATrainerCollection.findOne(cursor);
      res.send(result)
    })

    // add a class

    app.post("/add-a-class", async(req, res)=>{
      const AddClass = req.body;
      const result = await addAClassCollection.insertOne(AddClass);
      res.send(result)
    })
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res)=>{
    res.send("Tokyo Fitness Center")
})
app.listen(port, ()=>{
    console.log(`apps on running port: ${port}`)
})