import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getGeneric(path: string) {
    return new Promise<any>((resolve, reject) => {
      this.http.get(`${environment.baseUrl}${path}`).subscribe((res: any) => {
        resolve(<any>res);
      }, error => {
        reject(<any>error);
      });
    });
  }

}
