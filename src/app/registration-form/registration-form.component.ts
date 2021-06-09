
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  alert:boolean=false;
  registerForm!: FormGroup;
  // submitted!: Boolean;
  // errorMessage=String;
  // successMessage=String;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
     'userId': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'emailid':['', Validators.required,Validators.email],
      'address': ['', Validators.required],
      'gender': ['', Validators.required],
      'phonenumber':['', Validators.required,Validators.min(1000000000),Validators.max(9999999999)]
  })

  }

  submit(){
    this.alert=true;
    this.registerForm.reset({});

  }

  closeAlert(){
    this.alert=false;
  }
}
