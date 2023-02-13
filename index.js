const express = require('express') // here we just saving the module in the constant
const axios = require('axios')
const app = express() //here we initialize the express application

//after we initialize the express in the constant 'app' we can use the methods of express by using 'app.methodName' 

//here we set the port that our browser will use to access the application
app.listen('3000') //port where our server is running

//middleware
// here we tell our application that we're going to use JSON
// app.use(express.json()) 

// app.route('/').get((req, res) => res.send('Hi, welcome to the Home Page!'))

// app.route('/about').get( (req, res) => res.send('About Page! '))

// app.route('/register').post( (req, res) => { 
//   // console.log(req.body) 
//   res.send(req.body)
// })

// let author = "Matthew"

// app.route('/register').get( (req, res) => res.send(author) )

// // below we have a example of how we use BODY PARAMS 
// app.route('/register').put( (req, res) => {
//   author = req.body.author
//   //if we have more thant one variable comming in the body
//   // we can do as below 
//   //const { author, book } = req.body;
//   console.log(author)
//   res.send(author)
// })

// // below it's a example of how to use ROUTE PARAMS
// app.route('/deleteRegister/:id').delete( (req, res) => {
//   author = ""
//   res.send(`The content in the id ${req.params.id} was erased`)
// })

// // below we have a example of how we use QUERY PARAMS
// app.route('/queryParams').get( (req, res) => {
//   // res.send( req.query )
//   const { search, city } = req.query;
//   res.send(`Your search was ${search} for the city ${city}`)
// })

app.route('/').get(( req, res) => {
  axios.get('https://api.github.com/users/0xREALaldc')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.log(error))
})