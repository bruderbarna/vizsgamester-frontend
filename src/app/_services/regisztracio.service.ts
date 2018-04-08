import { Injectable } from '@angular/core';
import { Felhasznalo } from '../_models/felhasznalo';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Constants } from '../constants';

@Injectable()
export class RegisztracioService {

  constructor(private http: HttpClient) { }

  public registerFelhasznalo(token: string, felhasznalo: Felhasznalo): Observable<Felhasznalo> {
    return this.http.post<Felhasznalo>(Constants.API_URL + "/regisztracio/" + token, felhasznalo)
  }

}
