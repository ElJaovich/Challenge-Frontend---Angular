import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(8)]]
  });

  constructor( private fb: FormBuilder) {
  
  }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup):any{
    console.log('Email', form.value.email);
    console.log('password', form.value.password);
    console.log('Valid?', form.valid); // true or false
  }

}
