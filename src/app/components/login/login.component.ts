import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../../services/http-service.service'
import { Router } from '@angular/router'
import { LocalStorageService } from '../../services/local-storage.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(8)]]
  })
  progressBar:boolean = false
  start: boolean = true

  constructor(private localStorageService: LocalStorageService, private router: Router, private http: HttpServiceService, private fb: FormBuilder) {
  
  }

  ngOnInit(): void {
  }

  async onSubmit(form: FormGroup):Promise<void>{
    this.progressBar = true
    console.log('Email', form.value.email);
    console.log('password', form.value.password);
    console.log('Valid?', form.valid); // true or false
    const res = await this.http.post('http://challenge-react.alkemy.org',{email:'challenge@alkemy.org', password:'react'})
    if (res){
      console.log(res)
      this.localStorageService.setItem('token', res.token)
      this.progressBar = false
      this.router.navigate(['home'])
    }
  }

}
