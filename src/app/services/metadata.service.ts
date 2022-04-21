import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MetadataService {
  constructor(private _http: HttpClient){

  }

  getMetadata(component?: any){
    // eslint-disable-next-line no-underscore-dangle
    return new Observable((observable)=>{
      if(!sessionStorage.getItem('metadata')){
      this._http.get('./assets/json/response.json').pipe(
        map((res:any)=>{
          sessionStorage.setItem('metadata', JSON.stringify(res));         
          observable.next(res);
          observable.complete();
        })
      ).subscribe();   
      }else{
        let result = JSON.parse(sessionStorage.getItem('metadata'));
        observable.next(result);
        observable.complete();
      } 
    });
  }

  setMetadata(metadata){
    sessionStorage.setItem('metadata', JSON.stringify(metadata));
  }
}
