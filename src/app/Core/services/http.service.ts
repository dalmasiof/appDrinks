import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService <T>{

  private baseUrl:string="https://www.thecocktaildb.com/api/json/v1/1/"

  constructor(private httpClient: HttpClient) { }

  public GetById(path:string){
    return this.httpClient.get<T>(`${this.baseUrl}${path}`)
  }

  public GetList(path:string){
    console.log(`${this.baseUrl}${path}`) 
    return this.httpClient.get<[T]>(`${this.baseUrl}${path}`)
  }

  public Get(path:string){
    return this.httpClient.get<T>(`${this.baseUrl}${path}`)
  }



}
