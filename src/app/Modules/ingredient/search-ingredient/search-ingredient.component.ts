import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, switchMap } from "rxjs/operators";

import { IngredientModel } from 'src/app/Shared/Model/IngredientModel';
// import { IngredientAPIRespose } from 'src/app/Shared/Model/IngredientAPIResponse';
import { IngredientService } from 'src/app/Shared/services/ingredient.service';

@Component({
  selector: 'app-search-ingredient',
  templateUrl: './search-ingredient.component.html',
  styleUrls: ['./search-ingredient.component.css']
})
export class SearchIngredientComponent implements OnInit {

  listIngredients?: IngredientModel[]
  searchENtry$: Subject<string> = new Subject<string>()
  isLoading: boolean = false

  constructor(private _ingredientsSvc: IngredientService) { }

  ngOnInit(): void {

    this.searchENtry$.pipe(
      debounceTime(1000)
    ).subscribe((x) => {
      debugger
      this._ingredientsSvc.searchByName(x)
        .toPromise()
        .then(x => {
          this.listIngredients = x.ingredients
          this.isLoading = false;
        }).catch(x=>{
          alert(x)
          this.isLoading = false;

        })
    })

  }


  async onInputKeyUp(event: string) {
    this.listIngredients=[]
    if(event != ""){
      this.isLoading = true;
    this.searchENtry$.next(event);
    }
    
  }



}
