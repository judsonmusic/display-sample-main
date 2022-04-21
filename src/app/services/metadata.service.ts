import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MetadataService {
  constructor(private _http: HttpClient){

  }

  getMetadata(url, metaName, component?: any){
    // eslint-disable-next-line no-underscore-dangle
    return new Observable((observable)=>{
      if(!sessionStorage.getItem(metaName)){
      this._http.get(url).pipe(
        map((res:any)=>{
          sessionStorage.setItem(metaName, JSON.stringify(res));         
          observable.next(res);
          observable.complete();
        })
      ).subscribe();   
      }else{
        let result = JSON.parse(sessionStorage.getItem(metaName));
        observable.next(result);
        observable.complete();
      } 
    });
  }

  setMetadata(metadata, metaName){
    sessionStorage.setItem(metaName, JSON.stringify(metadata));
  }
}
