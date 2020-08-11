const Razorpay = require("razorpay");

var instance = new Razorpay({
    key_id: "rzp_test_s4thuv9B16weNx",
    key_secret: "XzNf882uvlCO0kcKALtoX4NJ"
  });


module.exports.razorpayInstance = instance;