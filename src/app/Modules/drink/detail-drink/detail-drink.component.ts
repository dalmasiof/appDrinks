import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DrinkService } from 'src/app/Shared/services/drink.service';
import { DrinkModel } from 'src/app/Shared/Model/DrinkModel';

@Component({
  selector: 'app-detail-drink',
  templateUrl: './detail-drink.component.html',
  styleUrls: ['./detail-drink.component.css']
})
export class DetailDrinkComponent implements OnInit {

  drinkDetails!: DrinkModel
  Ingredients: string[] = []
  Measures: string[] = []
  strTags: string[] = []


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private drinkSvc: DrinkService) { }

  ngOnInit(): void {
    let drinkId = this.data.Id
    this.drinkSvc.getById(drinkId).toPromise().then(x => {
      if (x.drinks.length > 0)
        this.drinkDetails = x.drinks[0];
      console.log(this.drinkDetails)

      this.Ingredients = this.drinkSvc.createModelIngrArrs(this.drinkDetails)
      this.Measures = this.drinkSvc.createModelMeaArrs(this.drinkDetails)
      if(this.drinkDetails.strTags != null){
        let arrTags = this.drinkDetails.strTags.split(',')
        for(let i in arrTags){
          this.strTags.push(arrTags[i].trim())
        }
      }
    })
  }

}
