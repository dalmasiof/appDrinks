import { Injectable } from '@angular/core';
import { IBaseRequest } from '../interface/IBaseRequest'
import { DrinkModel } from 'src/app/Shared/Model/DrinkModel';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { DrinkEndPoint } from 'src/app/Shared/EndPoints/DrinkEndPoint';

@Injectable()
export class DrinkService implements  IBaseRequest<DrinkModel> {

  constructor(private _httpSvc:HttpService<DrinkModel>) { }
  
  searchByName(nameString: String): Observable<[DrinkModel]> {
    // throw new Error('Method not implemented.');

    return this._httpSvc.GetList( DrinkEndPoint.SEARCH_DRINK+ nameString)
  }

  getById(Id: number): Observable<DrinkModel> {
    return this._httpSvc.GetById(DrinkEndPoint.GET_BY_ID + Id)
  }
  GetRandom(): Observable<DrinkModel> {
    return this._httpSvc.Get(DrinkEndPoint.RANDOM_DRINK)
  }
}
