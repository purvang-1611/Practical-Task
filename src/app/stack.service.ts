import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StackService {
private url:string="http://localhost:3000/stack/";
  constructor( private _http:HttpClient) { }
  getdata(word:string){
    return this._http.get(this.url+word);
  }
}
