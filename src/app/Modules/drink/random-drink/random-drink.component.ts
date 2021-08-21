import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-drink',
  templateUrl: './random-drink.component.html',
  styleUrls: ['./random-drink.component.css']
})
export class RandomDrinkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  randomDrink(){
    alert("a random drink here")
  }
}
