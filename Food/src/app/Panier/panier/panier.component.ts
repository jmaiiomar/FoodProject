import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommandeProduit } from 'src/app/modele/CommandeProduit';
import { User } from 'src/app/modele/Users';
import { CommandeService } from 'src/app/service/commande.service';

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
  constructor(private Cs: CommandeService, private toastr: ToastrService) { }

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
    updateComande(cmd : CommandeProduit[]): void {
      this.Commande=cmd;
     }
     delete(cmdc:CommandeProduit)
     {
       
  this.Commande.splice( this.Commande.indexOf(cmdc),1);
  localStorage.setItem('Panier', JSON.stringify(this.Commande));
  this.toastr.error('Deleted with Success!', 'Product ')

     }
     addCommande()
     {
       let user=new User();
      this.Commande.forEach(element => {
        user=JSON.parse(localStorage.getItem('currentUser'));
        element.user=user[0];
        this.Cs.addCommande(element).subscribe(c=>
          this.toastr.success('Added with Success!', 'Product ')

          );
       
      });
     }

}
