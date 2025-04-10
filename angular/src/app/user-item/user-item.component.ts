import { Component, Input } from '@angular/core';
//  aggiungi input agli imports
@Component({
  selector: 'app-user-item',
  imports: [], 
 
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  //name: string; // <-- aggiunta la proprietà name
  @Input() name: string; // <-- Aggiungi la notazione @input
  constructor() { 
    //this.name = 'Felipe'; // setta il nome nel costruttore
  }
}
