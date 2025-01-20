const express = require("express");
const cors = require("cors");

const jwt = require("jsonwebtoken")
require('dotenv').config();
const app = express()
const port = process.env.PORT || 5000;
app.use(cors({
  origin: ["http://localhost:5173", "https://clever-entremet-18d091.netlify.app"]
}));
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.BD_PASS}@cluster0.r7awt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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
   const addNewForumCollection = client.db("fitnessDB").collection("addNewForum");


  //  jwt collection
  app.post("/jwt", (req, res)=>{
    const user = req.body;
    const token = jwt.sign(user,process.env.JWT_TOKEN_ACCESS, {expiresIn : "365d"})
    res.send({token})
  })

  //  verify token
  const verifyToken = (req, res, next)=>{
     if(!req.headers.authorization){
       return res.status(401).send({message: "Unauthorized Access"})
     }
     const token = req.headers.authorization.split(" ")[1]
     jwt.verify(token, process.env.JWT_TOKEN_ACCESS, (err, decoded)=>{
      if(err){
        return res.status(401).send({message: "Unauthorized Acces"})
      }
      req.decoded = decoded
      next()
     })
  }

  // verify admin
  const verifyAdmin = async(req, res, next)=>{
    const email = req?.decoded?.email;
    const query = {email: email};
    const user = await userCollection.findOne(query);
    const isAdmin = user?.role === "admin";
    if(!isAdmin){
      return res.status(403).send({message: "forbidden access"})
    }
    next()
  }
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
    app.get("/users/admin/:email", verifyToken, async(req, res)=>{
      const email = req.params.email;
      if(email !== req?.decoded?.email){
        return res.status(403).send({message: "Forbidden Access"})
      }
      const query = {email: email};
      const user = await userCollection.findOne(query)
      let admin = false;
      if(user){
        admin = user?.role === "admin"
      }
      res.send(admin)
    })
    app.get("/users/trainer/:email",verifyToken, async(req, res)=>{
      const email = req.params.email;
      if(email !== req?.decoded?.email){
        return res.status(403).send({message: "Forbidden Access"})
      }
      const query ={email : email};
      const user = await userCollection.findOne(query);
      let trainer = false;
      if(user){
        trainer = user?.role === "trainer"
      }
      res.send(trainer)

    })
    app.patch("/users", async(req, res)=>{
      const {email, name, image} = req.body;
        const query = {email};
        const updteDoc = {
             $set: {
              name,
              image
             }
        }
        const result = await userCollection.updateOne(query, updteDoc)
        res.send(result)

    })

    // newsletter collection

    app.post("/newsletter", async(req, res)=>{
      const news = req.body;
      const result = await newsletterCollection.insertOne(news)
      res.send(result)
    })
    app.get("/newsletter",verifyToken, verifyAdmin, async(req, res)=>{
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
    app.get("/payment", async(req, res)=>{
      const result = await paymentCollection.find().toArray();
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

    app.post("/add-a-class",verifyToken, verifyAdmin, async(req, res)=>{
      const AddClass = req.body;
      const result = await addAClassCollection.insertOne(AddClass);
      res.send(result)
    })

    // add new forum collection 
    app.post("/add-new-forum", async(req, res)=>{
      const newForum = req.body;
      const result = await addNewForumCollection.insertOne(newForum);
      res.send(result)
    })
    app.get("/add-new-forum", async(req, res)=>{
      const result = await addNewForumCollection.find().toArray();
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