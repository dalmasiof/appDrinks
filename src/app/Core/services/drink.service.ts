import { Injectable } from '@angular/core';
import { IBaseRequest } from '../interface/IBaseRequest'
import { DrinkModel } from 'src/app/Shared/Model/DrinkModel';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { DrinkEndPoint } from 'src/app/Shared/EndPoints/DrinkEndPoint';
import { drinkAPIResponse } from 'src/app/Shared/Model/drinkAPIResponse';

@Injectable()
export class DrinkService implements IBaseRequest<drinkAPIResponse> {

  constructor(private _httpSvc: HttpService<drinkAPIResponse>) { }

  searchByName(nameString: String): Observable<drinkAPIResponse> {
    // throw new Error('Method not implemented.');

    return this._httpSvc.GetList(DrinkEndPoint.SEARCH_DRINK + nameString)
  }

  getById(Id: number): Observable<drinkAPIResponse> {
    return this._httpSvc.GetById(DrinkEndPoint.GET_BY_ID + Id)
  }
  GetRandom(): Observable<drinkAPIResponse> {
    return this._httpSvc.Get(DrinkEndPoint.RANDOM_DRINK)
  }

  createModelIngrArrs(drink: DrinkModel): string[] {
    let arrIngr : string[]=[]

    if (drink.strIngredient1 != null)
      arrIngr.push(
        drink.strIngredient1
      )

    if (drink.strIngredient2 != null)
      arrIngr.push(
        drink.strIngredient2
      )

    if (drink.strIngredient3 != null)
      arrIngr.push(
        drink.strIngredient3
      )

    if (drink.strIngredient4 != null)
      arrIngr.push(
        drink.strIngredient4
      )

    if (drink.strIngredient5 != null)
      arrIngr.push(
        drink.strIngredient5
      )

    if (drink.strIngredient6 != null)
      arrIngr.push(
        drink.strIngredient6
      )

    if (drink.strIngredient7 != null)
      arrIngr.push(
        drink.strIngredient7
      )

    if (drink.strIngredient8 != null)
      arrIngr.push(
        drink.strIngredient8
      )

    if (drink.strIngredient9 != null)
      arrIngr.push(
        drink.strIngredient9
      )

    if (drink.strIngredient10 != null)
      arrIngr.push(
        drink.strIngredient10
      )

    if (drink.strIngredient11 != null)
      arrIngr.push(
        drink.strIngredient11
      )

    if (drink.strIngredient12 != null)
      arrIngr.push(
        drink.strIngredient12
      )

    if (drink.strIngredient13 != null)
      arrIngr.push(
        drink.strIngredient13
      )

    if (drink.strIngredient14 != null)
      arrIngr.push(
        drink.strIngredient14
      )

    if (drink.strIngredient15 != null)
      arrIngr.push(
        drink.strIngredient15
      )

    return arrIngr;
  }

  createModelMeaArrs(drink: DrinkModel): string[] {
    let arrMea : string[]=[]

    if (drink.strMeasure1 != null)
      arrMea.push(
        drink.strMeasure1
      )

    if (drink.strMeasure2 != null)
      arrMea.push(
        drink.strMeasure2
      )

    if (drink.strMeasure3 != null)
      arrMea.push(
        drink.strMeasure3
      )

    if (drink.strMeasure4 != null)
      arrMea.push(
        drink.strMeasure4
      )

    if (drink.strMeasure5 != null)
      arrMea.push(
        drink.strMeasure5
      )

    if (drink.strMeasure6 != null)
      arrMea.push(
        drink.strMeasure6
      )

    if (drink.strMeasure7 != null)
      arrMea.push(
        drink.strMeasure7
      )

    if (drink.strMeasure8 != null)
      arrMea.push(
        drink.strMeasure8
      )

    if (drink.strMeasure9 != null)
      arrMea.push(
        drink.strMeasure9
      )

    if (drink.strMeasure10 != null)
      arrMea.push(
        drink.strMeasure10
      )

    if (drink.strMeasure11 != null)
      arrMea.push(
        drink.strMeasure11
      )

    if (drink.strMeasure12 != null)
      arrMea.push(
        drink.strMeasure12
      )

    if (drink.strMeasure13 != null)
      arrMea.push(
        drink.strMeasure13
      )

    if (drink.strMeasure14 != null)
      arrMea.push(
        drink.strMeasure14
      )

    if (drink.strMeasure15 != null)
      arrMea.push(
        drink.strMeasure15
      )

    return arrMea;
  }
}
