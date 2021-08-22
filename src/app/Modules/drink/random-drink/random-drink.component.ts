import { Component, OnInit } from '@angular/core';
import { DrinkService } from 'src/app/Core/services/drink.service';
import { DrinkModel } from 'src/app/Shared/Model/DrinkModel';

@Component({
  selector: 'app-random-drink',
  templateUrl: './random-drink.component.html',
  styleUrls: ['./random-drink.component.css']
})
export class RandomDrinkComponent implements OnInit {

  drinkModel!:DrinkModel
  
  Ingredients!:string[]
  Measures!:string[]

  constructor(private drinkSvc:DrinkService) { }

  ngOnInit(): void {
    this.randomDrink();
  }

  randomDrink(){
    debugger
   this.drinkSvc.GetRandom().toPromise().then(x=>{
     debugger

     this.drinkModel = x.drinks[0];
     this.Ingredients = this.drinkSvc.createModelIngrArrs(this.drinkModel)
     this.Measures = this.drinkSvc.createModelMeaArrs(this.drinkModel)
   })

  }

  clearTemplate(){
    this.drinkModel = new DrinkModel()
    this.Ingredients=[]
  }

  favoriteDrink(){
    //some logic to add on a favorite list on localstorage
    this.randomDrink()
  }
}
