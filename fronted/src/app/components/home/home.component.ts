import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: any = []

  constructor(
    private http:HttpServiceService
  ) { }

    ngOnInit(): void{
     this.getRecipe()
    }

 async getRecipe(): Promise <void> {
    const res = await this.http.get('https://jsonplaceholder.typicode.com/posts')
   this.data = res
  }

}
