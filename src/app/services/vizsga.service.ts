import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { VizsgaId } from '../dtos/vizsga-id.dto';
import { HttpHelperService } from './http-helper.service';

@Injectable()
export class VizsgaService {

  constructor(private httpHelperService: HttpHelperService) { }

  signInForVizsga(vizsgakod: string): Observable<VizsgaId> {
    return this.httpHelperService.sendRequest('signInForVizsga');
  }

}
