import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternshipService {


  constructor(private http : HttpClient) { }

  //all internships datas
  getData() : Observable<any>{
    return this.http.get("http://localhost:3200/internship/getInternship");
  };

  //internships data by ID
  getOne(id : {}) : Observable<any>{
     return this.http.get(`http://localhost:3200/internship/getOne/${id}`);
  };
}
