import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Moment} from "../models/Moment";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  API:string = `${environment.apiUrl}/moments`;

  constructor(private http: HttpClient) {

  }

  public findAll():Observable<Moment[]>{
    return this.http.get<Moment[]>(`${this.API}`);

  }

  public findById(id:number):Observable<Moment> {
    return this.http.get<Moment>(`${this.API}/${id}`);
  }

  delete(id: number) {
    return this.http.delete<Moment>(`${this.API}/${id}`);
  }

  create(moment: Moment): Observable<Moment> {
    return this.http.post<Moment>(`${this.API}`,moment)

  }
}
