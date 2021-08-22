import { Component, OnInit } from '@angular/core';
import { DrinkService } from 'src/app/Core/services/drink.service';

@Component({
  selector: 'app-random-drink',
  templateUrl: './random-drink.component.html',
  styleUrls: ['./random-drink.component.css']
})
export class RandomDrinkComponent implements OnInit {

  constructor(private drinkSvc:DrinkService) { }

  ngOnInit(): void {
  }

  randomDrink(){
    debugger
   this.drinkSvc.searchByName("caipirinha").toPromise().then(x=>{
     console.log(x)
   })

  }
}
