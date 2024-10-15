import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from "./components/hello-world/hello-world.component";
import { Esercizio1Component } from "./components/esercizio-1/esercizio-1.component";
import { ContatoreComponent } from "./components/contatore/contatore.component";
import { CalcolatriceComponent } from "./components/calcolatrice/calcolatrice.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWorldComponent, Esercizio1Component, ContatoreComponent, CalcolatriceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'corsoAngular';
}
