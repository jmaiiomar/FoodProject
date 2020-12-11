import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommandeProduit } from 'src/app/modele/CommandeProduit';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {
  total = 0;
  @Input() quantite: CommandeProduit;

  Commande: CommandeProduit[] = [];
  constructor() { }

  ngOnInit(): void {

    JSON.parse(localStorage['Panier']).forEach(element => {

      this.Commande.push(element);
    });
    this.Commande.forEach(c => {
      this.total = this.total + c.prix;
    })
  }



}
