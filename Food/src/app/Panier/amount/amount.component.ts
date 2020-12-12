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
  @Output() Update = new EventEmitter();

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
  EditComande(newQuantite:any,cmd:CommandeProduit)
  {
    
    this.Commande.forEach(c => {
      if(c.produit.id==cmd.produit.id)
      {
        c.quantite=newQuantite['quantite'];
        c.prix=c.produit.prix*newQuantite['quantite'];
     

      }
    }) ;
    this.total=0;
    this.Commande.forEach(c => {
      this.total = this.total + c.prix;
    })
   
    localStorage.setItem('Panier', JSON.stringify(this.Commande));
    alert('update ')
  }
  sendEvent(): void {
    this.Update.emit(this.Commande);
  }

}
