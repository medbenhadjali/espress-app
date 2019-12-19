const express = require("express");
const app = express();

let date = new Date().getHours();
console.log("date", date);
// app.use(express.static(__dirname + "/module"));
// let time = new Date().getHours();
if (date < 8 || date > 17) 
{
  app.get("/home.html", (req, res) => {
    // console.log("hello");
    // res.sendFile("/module/horsservice.html");
    res.sendFile(__dirname +'/module/horsservice.html')
  });
} 
else 
{
  app.use(express.static(__dirname + "/module"));
}

// app.use(test = (req, res, next) => {
//     if (date < 8 || date > 17) 
//     {
//       console.log("Our office is not open now");
//       res.send("Our office is not open now");
      
      
//     } 
//     // if(date > 8 || date < 17)
//     {
//       res.send(date);
//       app.use(express.static(__dirname ));
//       // next();
   
//       // app.use(express.static(__dirname + "/module"));


//     }
//   }
// );



app.listen(3000, err => {
  if (err) console.log("server not found");
  else console.log("wlc to your server");
});
