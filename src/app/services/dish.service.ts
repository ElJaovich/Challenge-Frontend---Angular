import { Injectable } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service'

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http:HttpServiceService) { }

  private token: string = '11891b2ccd694600b3e4b5ae6e382051'

  async getNormalDish(): Promise<any>{

    const normalDish = await this.http.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.token}&diet=primal&number=2`)
    let normalDishData: Array<object> = []

    for (let i = 0; i < normalDish.results.length; i++) {
      const idDish = normalDish.results[i].id
      const infoDish = await this.http.get(`https://api.spoonacular.com/recipes/${idDish}/information?apiKey=${this.token}`)
      normalDishData.push({id: idDish, title: normalDish.results[i].title, summary: infoDish.summary, image: infoDish.image, price: infoDish.pricePerServing, healthScore: infoDish.healthScore, timeReady: infoDish.readyInMinutes})
    } 
    return normalDishData
  }
  
   async getVeganDish(): Promise <any> {
  
      const veganDish = await this.http.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${this.token}&diet=vegan&number=2`)
      let veganDishData: Array<object> = []

      for (let i = 0; i < veganDish.results.length; i++) {
        const idDish = veganDish.results[i].id
        const infoDish = await this.http.get(`https://api.spoonacular.com/recipes/${idDish}/information?apiKey=${this.token}`)
        veganDishData.push({id: idDish, title: veganDish.results[i].title, summary: infoDish.summary, image: infoDish.image, price: infoDish.pricePerServing, healthScore: infoDish.healthScore, timeReady: infoDish.readyInMinutes})
      } 
      return veganDishData
    }
}
