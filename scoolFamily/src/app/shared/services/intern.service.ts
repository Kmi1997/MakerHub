import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intern } from 'src/app/registration/Intern.interface';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  constructor(private http: HttpClient) { }

  addIntern(data: Intern) : Observable<any>{
    console.log(data)
    return this.http.post("http://localhost:3200/intern/addIntern", data);
  };
}
