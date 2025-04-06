import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [Input], // <--- aggiungi questo
 
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  //name: string; // <-- aggiunta la proprietà name
  @Input() name: string = ""; // <-- Aggiungi la notazione @input
  constructor() { 
    //this.name = 'Felipe'; // setta il nome nel costruttore
  }
}
