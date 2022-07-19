import { Component, OnInit } from '@angular/core';
import { DishService } from '../../services/dish.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public normalPriceDish: number = 0
  public normalTimeDish: number = 0
  public normalHealthScore: number = 0
  public veganPriceDish: number = 0
  public veganTimeDish: number = 0
  public veganHealthScore: number = 0
  public normalDish: any
  public veganDish: any
  public deleted: boolean = true 

  constructor(
    private dish:DishService
  ) {}

   ngOnInit(){
    this.getDish()
    }

  async getDish() {

      this.normalDish = await this.dish.getNormalDish()
      this.veganDish = await this.dish.getVeganDish()
      for (let i = 0; i < this.normalDish.length; i++) {
        //console.log(normalDish[i].price)
        //console.log(normalDish[i].normalHealthScore)
        this.normalTimeDish = this.normalTimeDish + this.normalDish[i].timeReady
        this.normalPriceDish = this.normalPriceDish + this.normalDish[i].price
        this.normalHealthScore = this.normalHealthScore + this.normalDish[i].healthScore
      }
      //console.log('normalTimeDish:',this.normalTimeDish/this.normalDish.length, 'minutes')
      //console.log('normalHealthScore media:', this.normalHealthScore/this.normalDish.length)
      //console.log('total price',this.normalPriceDish)

      for (let i = 0; i < this.veganDish.length; i++) {
        this.veganTimeDish = this.veganTimeDish + this.veganDish[i].timeReady
        this.veganPriceDish = this.veganPriceDish + this.veganDish[i].price
        this.veganHealthScore = this.veganHealthScore + this.veganDish[i].healthScore
        //console.log(veganDish[i].price)
      }
      //console.log('veganTimeDish:',this.veganTimeDish/this.veganDish.length, 'minutes')
      //console.log('veganHealthScore media:', this.veganHealthScore/this.veganDish.length)
     //console.log('total price',this.veganPriceDish)
    }

    deleteDish(info:any){
      console.log(info.id)
      const result = this.normalDish.splice(0,info.id )
      console.log(result)
      
      //this.deleted = !this.deleted

    }

}
