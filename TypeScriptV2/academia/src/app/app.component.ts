import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'academia';
  luke = {
    name: "Luke",
    isJedi: "true",
    temple: "Corustant"
  }

  leia = {
    name: "Leia",
    isJedi: "false"
  }
}
