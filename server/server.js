const express = require("express");
const app = express();
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const razorPay = require("./helpers/razorpay")
const dotenv = require('dotenv');
dotenv.config();
// const usersRoutes = require("./api/routes/users.route");
// const professionRoutes = require("./api/routes/professions.route");
// const statesRoutes = require("./api/routes/states_districts.route");

// mongoose.connect(process.env.DB_URL, {
//     useCreateIndex: true,
//     useNewUrlParser: true
// });
// mongoose.connection.once("open", () => console.log("Db Connected"))
// mongoose.connection.once("error", () => console.log("Db Connection failed"))

app.use(body_parser.urlencoded({
    extended: true
}))
app.use(body_parser.json());
app.use(cors());
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: err.message
    })
});


// var orderJson = {
//     amount: 50000,  // amount in the smallest currency unit
//     currency: "INR",
//     receipt: "order_rcptid_11",
//     payment_capture: '1'
//   };
 
//app.use(passport.initialize());


// app.use("/api/users", usersRoutes);
// app.use("/api/profession", professionRoutes);
// app.use("/api/states", statesRoutes);
app.post("/makeanorder",function(req,res){
    let orderJson = {...req.body};
    razorPay.razorpayInstance.orders.create(orderJson, function(err, order) {
        if(err) res.status(500).json({ error })
        res.status(200).json({order})
    });
})
app.get("/makeapayment",function(req,res){
    
})
app.get("/",function(req,res){
    // razorPay.razorpayInstance.orders.create(orderJson, function(err, order) {
    //     res.json({order})
    //   });
    razorPay.razorpayInstance.orders.all({}, (error, response) => {
        if (error) {
            res.json({error})
        } else {
            res.json({response})
            // handle success
        }
        });
});


app.listen(4000, (err, res) => {})