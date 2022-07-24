import { Component, OnInit } from '@angular/core';
import { DishService } from '../../services/dish.service'
import Swal from 'sweetalert2';

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
  public idDish:any

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

      for (let i = 0; i < this.veganDish.length; i++) {
        this.veganTimeDish = this.veganTimeDish + this.veganDish[i].timeReady
        this.veganPriceDish = this.veganPriceDish + this.veganDish[i].price
        this.veganHealthScore = this.veganHealthScore + this.veganDish[i].healthScore
      }
    }

    deleteDish(info:any){
      for (let i = 0; i < this.normalDish.length; i++) {
        if(this.normalDish[i].id == info.id ){
          this.normalDish.splice(i,1)
          this.normalPriceDish = this.normalPriceDish - info.price
          this.normalTimeDish = this.normalTimeDish - info.timeReady
          this.normalHealthScore= this.normalHealthScore - info.healthScore
        }
      }
    }

    deleteVeganDish(info:any){
      for (let i = 0; i < this.veganDish.length; i++) {
        if(this.veganDish[i].id == info.id ){
          this.veganDish.splice(i,1)
          this.veganPriceDish = this.veganPriceDish - info.price
          this.veganTimeDish = this.veganTimeDish - info.timeReady
          this.veganHealthScore= this.veganHealthScore - info.healthScore
        }
      }
    }

    async showDish(info:any){
      Swal.fire({
        icon: 'info',
        title:`${info.title}`,
        text: `Price:${info.price} | Time Ready: ${info.timeReady} | HealthScore: ${info.healthScore}`,
        footer: `${info.creditsText}`
      })
    }

}
