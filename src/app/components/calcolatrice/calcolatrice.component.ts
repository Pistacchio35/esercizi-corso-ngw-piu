import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calcolatrice',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calcolatrice.component.html',
  styleUrl: './calcolatrice.component.css'
})
export class CalcolatriceComponent {

  num1: number = 0
  num2: number = 0
  ris: number = 0;

  onBtnSomma(){

    this.ris = 0;

    this.ris = this.num1 + this.num2

    alert('Risultato: ' + this.ris)

  }

  onBtnDifferenza(){

    this.ris = 0;

    this.ris = this.num1 - this.num2

    alert('Risultato: ' + this.ris)
  }

  onBtnMoltiplicazione(){

    this.ris = 0;

    this.ris = this.num1 * this.num2

    alert('Risultato: ' + this.ris)
  }
  
  onBtnDivisione(){

    this.ris = 0;

    this.ris = this.num1 / this.num2

    alert('Risultato: ' + this.ris)
  }

}
