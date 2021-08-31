import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBaseRequest } from 'src/app/Shared/interface/IBaseRequest';
import { IngredientEndPOint } from '../EndPoints/IngredientEndPOint';
import { drinkAPIResponse } from '../Model/drinkAPIResponse';
import { IngredientAPIRespose } from '../Model/ingredientAPIResponse';
import { IngredientModel } from '../Model/IngredientModel';
import { HttpService } from './http.service';

@Injectable()
export class IngredientService implements IBaseRequest<IngredientAPIRespose>{

  constructor(private _httpSvc:HttpService <IngredientAPIRespose>) { }

  searchByName(nameString: String): Observable<IngredientAPIRespose> {
    return this._httpSvc.GetList(IngredientEndPOint.SEARCH_INGREDIENT + nameString)
  }
  getById(Id: number): Observable<any> {
    throw new Error('Method not implemented.');
  }
  GetRandom(): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
