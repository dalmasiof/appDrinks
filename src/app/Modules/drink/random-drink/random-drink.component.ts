import { Component, OnInit } from '@angular/core';
import { DrinkService } from 'src/app/Core/services/drink.service';
import { DrinkModel } from 'src/app/Shared/Model/DrinkModel';
import { MatDialog } from '@angular/material/dialog';
import { DetailDrinkComponent } from '../detail-drink/detail-drink.component';


@Component({
  selector: 'app-random-drink',
  templateUrl: './random-drink.component.html',
  styleUrls: ['./random-drink.component.css']
})
export class RandomDrinkComponent implements OnInit {

  drinkModel!: DrinkModel

  Ingredients!: string[]
  Measures!: string[]

  constructor(private drinkSvc: DrinkService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.randomDrink();
  }

  randomDrink() {
    this.drinkSvc.GetRandom().toPromise().then(x => {
      this.drinkModel = x.drinks[0];
      this.Ingredients = this.drinkSvc.createModelIngrArrs(this.drinkModel)
      this.Measures = this.drinkSvc.createModelMeaArrs(this.drinkModel)
    })

  }

  seeMore() {
    this.openDialog()
  }



  openDialog() {

    var id = this.drinkModel.idDrink;
    

    let dialogRef = this.dialog.open(DetailDrinkComponent,{
      data:{
        Id:id
      }
    }
    ).updateSize("25%")

  }

  clearTemplate() {
    this.drinkModel = new DrinkModel()
    this.Ingredients = []
  }

  favoriteDrink() {
    //some logic to add on a favorite list on localstorage
    this.randomDrink()
  }
}
