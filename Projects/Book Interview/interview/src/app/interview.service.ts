import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private http: HttpClient) { }

      // student(){
  
    //   return this.http.get("http://localhost:44984/api/Students");
  
    // }
  
    // getStudent(id:number){
  
    //   return this.http.get(`http://localhost:44984/api/Students/id?id=`+id);
  
    // }



    //this value comes from bookinterview component
    bookInterview(interview:any){

      return this.http.post("http://localhost:3000/users/bookinterview",interview);
  
    }
}
