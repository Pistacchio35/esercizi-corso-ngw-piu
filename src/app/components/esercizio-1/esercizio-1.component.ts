import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { elementAt } from 'rxjs';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-esercizio-1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './esercizio-1.component.html',
  styleUrl: './esercizio-1.component.css'
})
export class Esercizio1Component {

  nome: string = 'Simone'
  cognome: string = 'Piserchia'
  eta: number = 20
  hobby: string = 'Pugilato'

  count: number = 0

  isShow: boolean = true;

  messaggio: string = 'Ciao,benvenuto nel mondo di Angular!'

  fruits = ['mela', 'banana', 'pera', 'mango']

  citta = [
    { cap: 1, nome: 'Palermo' },
    { cap: 2, nome: 'Roma' },
    { cap: 3, nome: 'Napoli' },
    { cap: 4, nome: 'Bari' },
    { cap: 5, nome: 'Lucca' },
  ]

  persone = [
    { nome: 'Andrea', eta: 20 },
    { nome: 'Elio', eta: 32 },
    { nome: 'Alessia', eta: 17 },
    { nome: 'Giuseppe', eta: 55 },
    { nome: 'Antonietta', eta: 86 },
  ]

  nomePaese: string = ''

  paesi = [
    { nome: 'Italia' },
    { nome: 'Germania' },
    { nome: 'Francia' },
    { nome: 'Spagna' },
    { nome: 'Inghilterra' },
  ]

  prodotti = [
    {prodotto: 'coca cola', prezzo: '2 euro'},
    {prodotto: 'spazzolino', prezzo: '1 euro'},
    {prodotto: 'carta igenica', prezzo: '5 euro'},
    {prodotto: 'pannolini', prezzo: '16 euro'},
    {prodotto: 'carne', prezzo: '5 euro'},
    {prodotto: 'acqua', prezzo: '2 euro'},
    {prodotto: 'gelatini', prezzo: '5 euro'},
    {prodotto: 'birra', prezzo: '4 euro'},
  ]



  //quando la pagina viene avviata  viene eseguita subito l'azione
  //contenuta nella funzione ngOnInit
  ngOnInit() {
    console.log(this.messaggio)
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