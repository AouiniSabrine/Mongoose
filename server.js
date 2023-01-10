const express=require("express")
const app=express()
const FoodDB=require("./config/FoodDB")
const FoodPerson=require("./routes/FoodPerson")
app.use(express.json())
//coonect to database
FoodDB()
FoodPerson()

app.use("/FoodPerson",require("./routes/FoodPerson"))
const port=5000

app.listen(port,(err)=>
err?console.log(err):console.log("server is running on port 5000"))