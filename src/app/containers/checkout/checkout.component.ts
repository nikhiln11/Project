import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers:[ProductService,],
})
export class CheckoutComponent implements OnInit {
  emailRegex =
   " /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i";
  checkoutForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(5)]),
    email: new FormControl('test@gmail.com',[Validators.required,Validators.minLength(5),Validators.pattern(this.emailRegex)]),
    pincode: new FormControl(null, [
      Validators.required,
      this.zipcodeValidator(),
    ]),
  });

  constructor(private productService: ProductService) {
   // this.loadData();
   }

  ngOnInit(): void {
  }
  saveData() {
    if (this.checkoutForm.valid) {
      this.productService.doCheckout(this.checkoutForm.value).subscribe(
        (data) => {
          console.log('SUCCESS', data);
        },
        (error) => {
          console.log('ERROR', error);
        }
      );
    }
  }
  loadData()
  {
    const data=
    {
      name:"Sample",
      email:"Sample@mailg.com",
      pincode:"123456",
    }
    this.checkoutForm.setValue(data);
  }
patchData()
  {
    const data=
    {
      name:"Sample",
      email:"Sample@mailg.com",
      //pincode:"123456",
    }
    this.checkoutForm.patchValue(data);
  }
  zipcodeValidator() {
    return (control: FormControl) => {
      if (!control.value || control.value == 123456 ) {
        // valid
        return null;
      }
      // invalid
      return {
        // name_of_error: information_related_to_error
        zipcode: {
          allowedCode: 123456,
          enteredCode: control.value,
        },
      };
    };
  }
}




