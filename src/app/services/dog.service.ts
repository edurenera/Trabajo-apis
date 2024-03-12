
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  private _http = inject(HttpClient);
  private url: string = `https://dog.ceo/api/breeds/image/random`;
  private urlDog: string = '';  //Parece que no se está usando pero para que se ejecute varias veces luego la función es necesario
  

  getDog(): Observable<any> {
    return this._http.get(this.url);
  }
  processDog(data: any): any {
    return this.urlDog = data.message
  }

  constructor() { }
}
