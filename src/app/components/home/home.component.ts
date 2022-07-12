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
    const res = await this.http.get('https://api.spoonacular.com/recipes/complexSearch&fillIngredients=true')
    console.log(res)
   this.data = res
  }

}
