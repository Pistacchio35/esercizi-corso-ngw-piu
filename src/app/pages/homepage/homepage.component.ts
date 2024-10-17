import { Component } from '@angular/core';
import { CalcolatriceComponent } from "../../components/calcolatrice/calcolatrice.component";
import { ContatoreComponent } from "../../components/contatore/contatore.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CalcolatriceComponent, ContatoreComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  messaggio: string = 'CONTATORE'

}
