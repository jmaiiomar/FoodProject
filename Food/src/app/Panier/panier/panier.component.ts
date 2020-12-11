import { Component, OnInit } from '@angular/core';
import { CommandeProduit } from 'src/app/modele/CommandeProduit';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  Commande: CommandeProduit[] = [];

  constructor() { }
total=0;
  ngOnInit(): void {
    JSON.parse(localStorage['Panier']).forEach(element => {

      this.Commande.push(element);
    });
this.Commande.forEach(c=>{
  this.total=this.total+c.prix;
})  
  }

}
