import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root',
})
export class DatosService {

  filtros: any[] = [
    {
      //vacio
    }  
  ];

  datos: any[] = [
    {
      "id": 1,
      "first_name": "Sebastian",
      "last_name": "Eschweiler",
      "email": "sebastian@codingthesmartway.com"
    },
    {
      "id": 2,
      "first_name": "Steve",
      "last_name": "Palmer",
      "email": "steve@codingthesmartway.com"
    },
    {
      "id": 3,
      "first_name": "Ann",
      "last_name": "Smith",
      "email": "ann@codingthesmartway.com"
    }
  ];

  datos2: any[] = [ ];
  headers: Headers;
  options: RequestOptions;
  //readonly url = "http://10.254.4.12:8080/api/1/";
  readonly url = "http://localhost:65413/api/1/";
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
    console.log("Filtros: "+this.filtros)
    
    let body = JSON.stringify(param);
    //let res = this.http.post(this.url+sqlId,{},this.options).subscribe(val => console.log("valor: ",val.json()));
    //this.http.post(this.url+sqlId,{},this.options).subscribe(val => { return val; });        
    //return this.http.post(this.url+sqlId,{},this.options);        
    let urlApi = this.url +sqlId;
    
    let res = this.http.post(urlApi,body,this.options);
    return res;

  //  this.http.post(urlApi,body,this.options).subscribe(
  //    response => {
  //      console.log("Respuesta: "+response.json());
  //      },
  //    error => console.log(error)
  //  );
  }


  /*
  postDatos(){
    console.log("Filtros: "+this.filtros)
    let url = "http://10.254.4.12:8080/api/1/1";
    this.http.post(url, this.filtros).subscribe(
      response => {
        console.log("Respuesta: "+response.json());
        },
      error => console.log(error)
    );
  }
  */
  getDatos3()
  {
    let param = [
      {
        "param":"fecha_inicio",
        "value":"2018-01-01"
      },
      {
        "param":"fecha_fin",
        "value":"2018-04-30"
      }
    ];
    return this.getDatos(3,param);
  }
  getDatos2() {
    return this.datos;
  }

  getDato2() {
   // this.postDatos();
    return this.datos2;
  }

  getDatosTest1() :any
  {
    let datos = [{
      country: "Murcia",
      visits: 2025
  }, {
      country: "China",
      visits: 1882
  }, {
      country: "Japan",
      visits: 1809
  }, {
      country: "Brazil",
      visits: 395
  }];

  return datos;
  }

  getDatosTest2() :any
  {
    let datos = [{
      country: "Spain",
      visits: 2025
  }, {
      country: "China",
      visits: 1882
  }, {
      country: "Japan",
      visits: 1809
  }, {
      country: "Brazil",
      visits: 395
  }];

  return datos;
  }
  getDatosTest3():any
  {
    let datos = [
      {
          "des_articulo": "ruedas del tipo2",
          "cantidad_articulos": 23.5,
          "expenses": 18.1
      },
      {
          "year": 2006,
          "income": 26.2,
          "expenses": 22.8
      },
      {
          "year": 2007,
          "income": 30.1,
          "expenses": 23.9
      },
      {
          "year": 2008,
          "income": 29.5,
          "expenses": 25.1
      },
      {
          "year": 2009,
          "income": 24.6,
          "expenses": 25
      }
  ];
  return datos;
  }
  getDatosTree()
  {
    return this.http.get('/assets/datos/datatree.json',this.options)
                    .toPromise()
                    .then(res => res.json().data);
    
  }
  getDatosTreeProceso()
  {
    return this.http.get('/assets/datos/datosProceso.json',this.options)
                    .toPromise()
                    .then(res => res.json().data);
    
  }
}
