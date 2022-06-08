const express = require("express")
require("./connection")
const app = express()
const UsersModel = require("./schemaModel")

app.use(express.json())

app.get("/",async(req,res)=>{
    try{
        const data = await UsersModel.find()
        res.send(data)
    }
    catch(e){
        res.send(e)
    }

})

app.get("/:id",async(req,res)=>{
    try{
        const data = await UsersModel.findById({_id:req.params.id})
        res.send(data)
    }
    catch(e){
        res.send(e)
    }

})

app.post("/",async(req,res)=>{
    try{
        const data = await UsersModel(req.body).save()
        console.log(data)
        res.status(201).send(data)
    }
    catch(e){
        res.send(e)
    }

})

app.put("/:id",async(req,res)=>{
    try{
        const data = await UsersModel.updateOne({_id:req.params.id},{$set:req.body})
        console.log(data)
        if(data.acknowledged){
            res.send("data sucesssfull Updated")
        }else{
            res.send("data Updated Failed")
        }
    }
    catch(e){
        res.send(e)
    }

 
})

app.delete("/:id",async(req,res)=>{
    try{
        const data = await UsersModel.deleteOne({_id:req.params.id})
        res.send(data)
    }
    catch(e){
        res.send(e)
    }

})

app.listen(5000,()=>{
console.log("server runing")
})