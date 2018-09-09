import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root',
})
export class DatosService {
    
  headers: Headers;
  options: RequestOptions;
  //readonly url = "http://10.254.4.12:8080/api/1/";
  readonly url = "http://localhost:65413/api/1/";
  readonly urlEtl = "http://localhost:65413/api/etl/";
  readonly urlFilter = "http://localhost:65413/api/1/filtros";
  
  constructor(private http: Http) { 
    this.headers = new Headers();
    this.headers.append('Content-Type','application/json'); 
   // this.headers.append('Access-Control-Allow-Origin','*');
    this.options = new RequestOptions();
    this.options.headers = this.headers;
  }

  getDatosFiltrados(filtros:string): Observable<any>
  {
    //let body = JSON.stringify(filtros);
    let body = [null,["uno"],"dos"];
    let res = this.http.post(this.urlFilter,body,this.options);
    return res;
  }

  getDatos(sqlId: number, param: any): Observable<any> 
  {        
    let body = JSON.stringify(param);       
    let urlApi = this.url +sqlId;
    
    let res = this.http.post(urlApi,body,this.options);
    return res;
  }

  getDataNode(param:any)
  {
    let body = JSON.stringify(param);       
    let urlApi = this.urlEtl + "GetDataNode";
    
    let res = this.http.post(urlApi,body,this.options);

    return res.toPromise()
              .then(res=>res.json());
  }

  executeStep(param:any)
  {
    let body = JSON.stringify(param);       
    let urlApi = this.urlEtl + "executeStep";
    
    let res = this.http.post(urlApi,body,this.options);
    
    return res.toPromise()
              .then(res=>res.json());
  }

  getEtlTree()
  {
    let body = JSON.stringify("");          
    let urlApi = this.urlEtl + "GetEtlTree";
    
    let res = this.http.post(urlApi,body,this.options);

    return res.toPromise()
              .then(res=>res.json().data);
  }

  getUsers(){
    return this.http.get('/assets/datos/users.json',this.options)
                    .toPromise()
                    .then(res => res.json().data);
  }

  getDatosTree()
  {
    return this.http.get('/assets/datos/datatree.json',this.options)
                    .toPromise()
                    .then(res => res.json().data);
    
  }
  // getDatosTreeProceso()
  // {
  //   return this.http.get('/assets/datos/datosProceso.json',this.options)
  //                   .toPromise()
  //                   .then(res => res.json().data);
    
  // }
}
