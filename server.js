// Load Express npm init -y to load package JSON in terminal
const express = require('express')

// Create Express APP
const app = express()



// Root Route of APP- creating root route
app.get('/',function(req,res){
    let reply = "<h1>99 Bottles of beer on the wall </h1>"
    let link = "<a href = /98>take one down, pass it around</a>"
    res.send(reply+link)

})

app.get('/0',function(req,res){
    
    let link = "<a href = /><h1>START OVER</h1></a>"
    res.send(link)

})

app.get('/:number',function(req,res){
    let bottles = req.params.number
    console.log(bottles)
    let display =  `<h1>${bottles} Bottles of beer on the wall</h1>`
    let bottles2 = bottles - 1
   console.log(bottles2)
    let link = "<a href = /"
     
    let link2 = "><h1>take one down and pass it around</h1></a>"
    res.send(display + link + bottles2 +link2)

})

// Makes APP listen on port 8080
app.listen(8080, ()=> {
console.log('Lisetning on PORT 8080')
})


// app.get('/greeting',function(req,res){
//     let greeting = "Hello Stranger"
//     res.send(greeting)

// })

// app.get('/greeting/:name',function(req,res)

// {
//     let greeting = `Hello my name is ${req.params.name}`
//     res.send(greeting)

// })

// app.get('/tip/:total/:tipPercentage',function(req,res)

// {
//     let tipAmount = req.params.total * (req.params.tipPercentage/100);
//     let amount = `Tip this amount: $${tipAmount}`
//     res.send(amount)

// })


// app.get('/magic/:phrase',function(req,res){
//  let randomNumber = Math.floor(Math.random() * (10 - 0) + 0);
    
//     let phrase = req.params.phrase
   
  
//       let reply = data[randomNumber]
//     let display = `Question: ${phrase}`

//     res.send(display + data[randomNumber])

// })
