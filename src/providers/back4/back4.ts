import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable'

/*
  Generated class for the Back4Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Back4Provider {
  private url = 'https://parseapi.back4app.com/classes/Membro'
  private urlC= 'https://parseapi.back4app.com/classes/Celula'
  private urlLogin= 'https://parseapi.back4app.com/login?'

  constructor(public http: Http) {
    console.log('Hello Back4Provider Provider');
  }

  getMembros(){
    let headers = new Headers();
    headers.append('X-Parse-Application-Id','GobaNcIJbtVT8Ce8wo4CTLk4S9l7YGz5kF65Q0VH')
    headers.append('X-Parse-REST-API-Key', '3WYZc0hb7cMVXf9lexodSrIyfnj0oQSz24wCaEzH')
    let options = new RequestOptions({headers : headers})
    return this.http.get(this.url,options)
    .map(this.extractData)
    .do(this.logReponse)
    .catch(this.catchError)

  }

  private catchError(error: Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server error")
  }

  private logReponse(res: Response){
    console.log(res)
  }
  private extractData(res: Response){
    return res.json();

  }
  postmembros(data){
    let headers = new Headers();
    headers.append('X-Parse-Application-Id','GobaNcIJbtVT8Ce8wo4CTLk4S9l7YGz5kF65Q0VH')
    headers.append('X-Parse-REST-API-Key', '3WYZc0hb7cMVXf9lexodSrIyfnj0oQSz24wCaEzH')
    let options = new RequestOptions({headers : headers})
    return this.http.post(this.url,data, options)
    .map(this.extractData)
    .do(this.logReponse)
    .catch(this.catchError)

  }
  getMembro(id){
    let headers = new Headers();
    headers.append('X-Parse-Application-Id','GobaNcIJbtVT8Ce8wo4CTLk4S9l7YGz5kF65Q0VH')
    headers.append('X-Parse-REST-API-Key', '3WYZc0hb7cMVXf9lexodSrIyfnj0oQSz24wCaEzH')
    let options = new RequestOptions({headers : headers})
    return this.http.get(this.url+'/'+ id, options)
    .map(this.extractData)
    .do(this.logReponse)
    .catch(this.catchError)
  }

  editarMembro(id, data){
    let headers = new Headers();
    headers.append('X-Parse-Application-Id','GobaNcIJbtVT8Ce8wo4CTLk4S9l7YGz5kF65Q0VH')
    headers.append('X-Parse-REST-API-Key', '3WYZc0hb7cMVXf9lexodSrIyfnj0oQSz24wCaEzH')
    let options = new RequestOptions({headers : headers})
    return this.http.put(this.url+'/'+ id, data, options)
    .map(this.extractData)
    .do(this.logReponse)
    .catch(this.catchError)
  }

  deletarmembro(id){
    let headers = new Headers();
    headers.append('X-Parse-Application-Id','GobaNcIJbtVT8Ce8wo4CTLk4S9l7YGz5kF65Q0VH')
    headers.append('X-Parse-REST-API-Key', '3WYZc0hb7cMVXf9lexodSrIyfnj0oQSz24wCaEzH')
    let options = new RequestOptions({headers : headers})
    return this.http.delete(this.url+'/'+ id, options)
    .map(this.extractData)
    .do(this.logReponse)
    .catch(this.catchError)
  }

  getCelulas(){
    let headers = new Headers();
    headers.append('X-Parse-Application-Id','GobaNcIJbtVT8Ce8wo4CTLk4S9l7YGz5kF65Q0VH')
    headers.append('X-Parse-REST-API-Key', '3WYZc0hb7cMVXf9lexodSrIyfnj0oQSz24wCaEzH')
    let options = new RequestOptions({headers : headers})
    return this.http.get(this.urlC,options)
    .map(this.extractData)
    .do(this.logReponse)
    .catch(this.catchError)

  }
  getCelula(id){
    let headers = new Headers();
    headers.append('X-Parse-Application-Id','GobaNcIJbtVT8Ce8wo4CTLk4S9l7YGz5kF65Q0VH')
    headers.append('X-Parse-REST-API-Key', '3WYZc0hb7cMVXf9lexodSrIyfnj0oQSz24wCaEzH')
    let options = new RequestOptions({headers : headers})
    return this.http.get(this.urlC+'/'+id,options)
    .map(this.extractData)
    .do(this.logReponse)
    .catch(this.catchError)

  }

  cadastrarCelula(data){
    let headers = new Headers();
    headers.append('X-Parse-Application-Id','GobaNcIJbtVT8Ce8wo4CTLk4S9l7YGz5kF65Q0VH')
    headers.append('X-Parse-REST-API-Key', '3WYZc0hb7cMVXf9lexodSrIyfnj0oQSz24wCaEzH')
    let options = new RequestOptions({headers : headers})
    return this.http.post(this.urlC, data, options)
    .map(this.extractData)
    .do(this.logReponse)
    .catch(this.catchError)

  }
  editarCelula(id, data){
    let headers = new Headers();
    headers.append('X-Parse-Application-Id','GobaNcIJbtVT8Ce8wo4CTLk4S9l7YGz5kF65Q0VH')
    headers.append('X-Parse-REST-API-Key', '3WYZc0hb7cMVXf9lexodSrIyfnj0oQSz24wCaEzH')
    let options = new RequestOptions({headers : headers})
    return this.http.put(this.urlC+'/'+ id, data, options)
    .map(this.extractData)
    .do(this.logReponse)
    .catch(this.catchError)

  }
  excluirCelula(id){
    let headers = new Headers();
    headers.append('X-Parse-Application-Id','GobaNcIJbtVT8Ce8wo4CTLk4S9l7YGz5kF65Q0VH')
    headers.append('X-Parse-REST-API-Key', '3WYZc0hb7cMVXf9lexodSrIyfnj0oQSz24wCaEzH')
    let options = new RequestOptions({headers : headers})
    return this.http.delete(this.urlC+'/'+ id, options)
    .map(this.extractData)
    .do(this.logReponse)
    .catch(this.catchError)

  }
  logar(username,senha){
    let headers = new Headers();
    headers.append('X-Parse-Application-Id','GobaNcIJbtVT8Ce8wo4CTLk4S9l7YGz5kF65Q0VH')
    headers.append('X-Parse-REST-API-Key', '3WYZc0hb7cMVXf9lexodSrIyfnj0oQSz24wCaEzH')
    let options = new RequestOptions({headers : headers})
    return this.http.get(`https://parseapi.back4app.com/login?username=${username}&password=${senha}`, options)
    .map(this.extractData)
    .do(this.logReponse)
    .catch(this.catchError)

  }


}
