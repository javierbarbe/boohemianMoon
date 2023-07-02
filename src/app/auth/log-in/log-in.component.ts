import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../models/myErrorStateMatcher';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent {

  miForm:FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private fb:FormBuilder){
    this.miForm = this.fb.group({
      email: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    })
  }

  login(){
    console.log("logueandomeee1")
    console.log(this.miForm.valid)

  }

}
