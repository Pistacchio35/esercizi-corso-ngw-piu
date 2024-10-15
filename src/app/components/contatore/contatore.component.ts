import { Component } from '@angular/core';

@Component({
  selector: 'app-contatore',
  standalone: true,
  imports: [],
  templateUrl: './contatore.component.html',
  styleUrl: './contatore.component.css'
})
export class ContatoreComponent {

  counter: number = 0

  onBtnAumenta() {

    this.counter++

  }

  onBtnDiminuisci() {

    if (this.counter >= 1) {

      this.counter--;

    }
    else { alert('Il contatore non può scenere sotto lo 0!') }
  }

  onBtnReset() {

    this.counter = 0
  
  }
}
