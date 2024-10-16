import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { elementAt } from 'rxjs';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-gestione-ruolo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './gestione-ruolo.component.html',
  styleUrl: './gestione-ruolo.component.css'
})
export class GestioneRuoloComponent {

  ruolo: string = ''

}
