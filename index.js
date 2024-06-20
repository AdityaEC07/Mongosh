// let express = require('express')
// let mongoose = require('mongoose')
// mongoose.connect(' mongodb://127.0.0.1:27017/')
// .then(()=>
// {
//     console.log(' db');
// }).catch((err)=>

// {
//     console.log(err,"not work");
// })

// let app = express()
// app.get ('/',(req,res)=>
// {

//     res.send("hello")
// })

// app.listen(4000,()=>
// {
//     console.log('4000 ');
// })



let express = require ('express')
let mongoose = require ('mongoose')
let app = express()

mongoose.connect('mongodb://127.0.0.1:27017/mydata')
.then(()=>
{
    console.log('connect');
}).catch ((err)=>
{
    console.log(err,'not connect');
})

let userScheme = mongoose.Schema

({
    id : Number,
    name:String,
    lastname:String,
    contact:Number,
    isPresent:Boolean
})

let User = mongoose.model('User',userScheme)
let user = new User({id:1,  name:"Aditya",lastname:"singh",contact:"1233641115",isPresent:true})
user.save()

app.get('/',(req,res)=>
    
{

    res.send('hello')
})


app.listen(6000,()=>

{
    console.log('serverv ok 6000');
})




