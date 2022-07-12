import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public veganDishData: Array<object> = []
  public normalDishData: Array<object> = []
  public data: any = []
  private token: string = '11891b2ccd694600b3e4b5ae6e382051'

  constructor(
    private http:HttpServiceService
  ) { }

    async ngOnInit(): Promise<void>{
     await this.getNormalDish()
     await this.getVeganDish()
     this.getMedia()
    }

async getNormalDish(): Promise<void>{

  const normalDish = await this.http.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.token}&diet=primal&number=2`)

  for (let i = 0; i < normalDish.results.length; i++) {
    const idDish = normalDish.results[i].id
    const infoDish = await this.http.get(`https://api.spoonacular.com/recipes/${idDish}/information?apiKey=${this.token}`)
    this.normalDishData.push({title: normalDish.results[i].title, price: infoDish.pricePerServing, healthScore: infoDish.healthScore, timeReady: infoDish.readyInMinutes})
  } 
}

 async getVeganDish(): Promise <void> {

    const veganDish = await this.http.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.token}&diet=vegan&number=2`)
    
    for (let i = 0; i < veganDish.results.length; i++) {
      const idDish = veganDish.results[i].id
      const infoDish = await this.http.get(`https://api.spoonacular.com/recipes/${idDish}/information?apiKey=${this.token}`)
      this.veganDishData.push({title: veganDish.results[i].title, price: infoDish.pricePerServing, healthScore: infoDish.healthScore, timeReady: infoDish.readyInMinutes})
    }
  }

  getMedia(){
    for (let i = 0; i < this.veganDishData.length; i++) {
      const price = this.veganDishData

      console.log(price)
    }
  }

}
