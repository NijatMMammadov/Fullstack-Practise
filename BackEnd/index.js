const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

app.get("/", (req, res) => {
    res.send("Welcome Node")
});

app.listen(3000, () => {
    console.log("bu app 3000 portunda dinlenilir");
});

mongoose.connect(process.env.ConnetionString)
    .then(() => {
        console.log("Connected");
    })

let ProductSchema = new mongoose.Schema({
    name: String,
    title:String,
    description: String,
    country: String,
    price: Number,
    image: String
})

let ProductModel = mongoose.model("products", ProductSchema)

app.get("/products", async (req, res) => {
    let products = await ProductModel.find()
    res.send(products)
})

app.get("/products/:id", async (req, res) => {
    let id = req.params.id
    let myProduct = await ProductModel.findById(id)
    res.send({
        message: "Success GetById",
        data:myProduct
    })
})

app.delete("/products/:id",async (req,res)=>{
    let {id}=req.params
    await ProductModel.findByIdAndDelete(id)
    res.send({
        message:"Success Delete"
    })
})

app.post("/products",async(req,res)=>{
    let newProduct=ProductModel(req.body)
    await newProduct.save()
    res.send({
        message:"Success Post",
        data:req.body
    })
})
