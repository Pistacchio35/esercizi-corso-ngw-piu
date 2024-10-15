import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-esercizio-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './esercizio-1.component.html',
  styleUrl: './esercizio-1.component.css'
})
export class Esercizio1Component {

  nome: string = 'Simone'
  cognome: string = 'Piserchia'
  eta: number = 20
  hobby: string = 'Pugilato'
  count: number = 0
  isShow: boolean = true

  messaggio: string = 'Ciao,benvenuto nel mondo di Angular!'

  //quando la pagina viene avviata  viene eseguita subito l'azione
  //contenuta nella funzione ngOnInit
  ngOnInit() {
    alert(this.messaggio)
    console.log('sono stato modificato')
  }

  saluta() {
    alert('ciao compà')
  }

  urlImmagine = 'https://en.m.wikipedia.org/wiki/File:Angular_full_color_logo.svg'

  onBtnClickAumenta() {
    this.count++;
  }

  onBtnClickDiminuisci() {

    if (this.count >= 1) {

      this.count--;

    }
    else { alert('Il contatore non può scenere sotto lo 0!') }
  }

  onBtnReset() {

    this.count = 0
  
  }
}