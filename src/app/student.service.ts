import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url= "http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

  getStudent():Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.url}/student`);
  }

  saveStudent (student: Student):Observable<Student>{
    return this.httpClient.post<Student>(`${this.url}/save`,student);
    
  }
  // saveStudent(student: Student): Observable<Student> {
  // return this.httpClient.post<Student>(`${this.url}/save`, student); // ✅ send student data
}


