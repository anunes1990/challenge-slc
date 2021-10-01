import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public orderByDesc(array:any, parametro:string) {
    return array.sort(function (a:any, b:any) {
      if (parseInt(a[parametro]) < parseInt(b[parametro])) {
        return 1;
      }
      if (parseInt(a[parametro]) > parseInt(b[parametro])) {
        return -1;
      }
      return 0;
    });
  }

}
