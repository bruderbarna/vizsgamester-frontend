import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class HttpHelperService {

  constructor() { }

  sendRequest(method: string, params: object = {}): Observable<any> {
    return of(null);
  }
}
