import { Component, OnInit } from '@angular/core';
import { CommandeProduit } from 'src/app/modele/CommandeProduit';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  Commande: CommandeProduit[] = [];
  quantite;
  edit=true;
  constructor() { }

  ngOnInit(): void {
    JSON.parse(localStorage['Panier']).forEach(element => {

      this.Commande.push(element);
    });
  }
  EnbleEdit ()
    {
      this.edit=false;
    }

}
