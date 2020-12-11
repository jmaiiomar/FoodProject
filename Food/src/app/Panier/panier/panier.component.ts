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
  CommandeEdit=null;
  constructor() { }

  ngOnInit(): void {
    JSON.parse(localStorage['Panier']).forEach(element => {

      this.Commande.push(element);
    });
  }
  EnbleEdit (cmd:CommandeProduit)
    {this.CommandeEdit=new CommandeProduit();
      this.CommandeEdit=cmd;
      if(this.CommandeEdit!=null)
      {this.edit=false;}
      console.log("this is it: "+this.CommandeEdit)

    }

}
