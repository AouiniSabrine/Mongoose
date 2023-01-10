const mongoose=require("mongoose")
const schema=mongoose.Schema

const PersonSchema= new schema({
    name:{
        type:String
    
    },
    age:{
        type:Number
        
    },
    favoritefood:{
        type:[Srtring]
    }
    
})

module.exports=Person=mongoose.model("Person",PersonSchema)