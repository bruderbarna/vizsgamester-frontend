import { Component } from '@angular/core';
import { VizsgaService } from '../../services/vizsga.service';
import { VizsgaId } from '../../dtos/vizsga-id.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  vizsgakod = '';
  vizsgakodErrorMsg = '';

  constructor(private vizsgaService: VizsgaService,
              private router: Router) {}

  signInForVizsga(): void {
    if (this.vizsgakod === '') {
      this.vizsgakodErrorMsg = 'Vizsgakód nem lehet üres!';
      return;
    }

    this.vizsgakodErrorMsg = '';
    this.vizsgaService.signInForVizsga(this.vizsgakod).subscribe(
      (vizsgaId: VizsgaId) => {
        // TODO: store vizsgaId
        this.router.navigate(['/pre-vizsga']);
      },
      (error: string) => this.vizsgakodErrorMsg = error
    );
  }

}
