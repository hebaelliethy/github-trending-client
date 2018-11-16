import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { reposResult } from './repos';



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }

   getTrending(filterName:string,limit=10):Observable<reposResult>{
    const githubUrl= 'http://localhost:3100/trending/?searchterm=${filterName}&limit=${limit}';
    return this.http.get<reposResult>(githubUrl)
  };

}
