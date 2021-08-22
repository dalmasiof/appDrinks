import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DrinkService } from 'src/app/Core/services/drink.service';

@Component({
  selector: 'app-detail-drink',
  templateUrl: './detail-drink.component.html',
  styleUrls: ['./detail-drink.component.css']
})
export class DetailDrinkComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private drinkSvc:DrinkService) { }

  ngOnInit(): void {
    debugger
    // this.drinkSvc.getById(this.drinkModel.idDrink).toPromise().then(x => {
    //   drinkDetails = x.drinks[0];
    // })
    var x = this.data.componentInstance;


    console.log(this.data)
  }

}
