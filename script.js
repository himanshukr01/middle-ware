// var a = 12;

// module.exports = a;
    


// for installing npm we have to type given below


// npm i one-liner-joke

// usages
// var oneLinerJoke = require('one-liner-joke');
// console.log(oneLinerJoke.getRandomJoke());




// for art

// var figlet = require("figlet");
// figlet("Himanshu !!", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
//   });





// how to use express 

const express = require('express');
const app = express();




app.use(function(req, res, next){
  console.log("hello from middleware");
  next();
});



app.use(function(req, res, next){
  console.log("hello from middleware 2");
  next();
});
//app.get('route', function(request, respond))


app.get("/profile", function (req, res) {
  res.send("Hello Worid Profile");
});


app.get("/", function (req, res) {
  res.send("Hello Worid ");
});

app.listen(3000);