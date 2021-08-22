import { Observable } from "rxjs";



export interface IBaseRequest <T> {
    searchByName(nameString: String): Observable<[T]>
    getById(Id: number): Observable<T>
    GetRandom(): Observable<T>
  }