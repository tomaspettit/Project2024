import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {

  constructor(private httpClient: HttpClient) { }
  GetFoodData():Observable<any>{
    return this.httpClient.get("https://www.jsonblob.com/api/jsonBlob/1230181583696027648");
  }
}