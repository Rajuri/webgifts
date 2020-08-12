import { Component, OnInit, defineInjectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

// import * as Razorpay from 'razorpay';
declare var Razorpay: any; 

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }

  payment(){
    var orderJson = {
          amount: 50000,  // amount in the smallest currency unit
          currency: "INR",
          receipt: "order_rcptid_11",
          payment_capture: '1'
    }
    this._http.post("http://localhost:4000/makeanorder",orderJson).pipe(tap(d => console.log(d))).subscribe((response) => {
      var options = {
        "key": "rzp_test_s4thuv9B16weNx", // Enter the Key ID generated from the Dashboard
        "amount": "5", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Durga",
        "description": "Durga Transaction",
        "image": "https://example.com/your_logo",
        "order_id": "order_FPT6Gl01Rm29JM", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            console.log(response);
        },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
    },() => {

    })

  }
}
