import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getGeneric(path: string) {
    return new Promise<any>((resolve, reject) => {
      this.http.get(path).subscribe((res: any) => {
        resolve(<any>res);
      }, error => {
        reject(<any>error);
      });
    });
  }

}
