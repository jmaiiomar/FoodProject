import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommandeProduit } from '../modele/CommandeProduit';
import { User } from '../modele/Users';
import { CommandeService } from '../service/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
  Commande: CommandeProduit[] = [];

  constructor(private Cs: CommandeService,private toastr: ToastrService) { }
  user=JSON.parse(localStorage.getItem('currentUser'));

  ngOnInit(): void {
    


    this.Cs.findbyUser().subscribe(
      (data: CommandeProduit[]) => {
        data.forEach(d=>{
          

          if(d.user.id===this.user[0].id)
          {this.Commande.push(d);
          }
        }
         
        );
      }
    );
    
  }
  delete(id:number)
  {
    this.Cs.deleteCommande(id).subscribe(d=>{
     
      this.Commande=[];
      this.Cs.findbyUser().subscribe(
        (data: CommandeProduit[]) => {
          data.forEach(d=>{
            
  
            if(d.user.id===this.user[0].id)
            {this.Commande.push(d);
            }
          }
           
          );
        }
      );
      this.toastr.error('Deleted with Success!', 'Command ')
    }
       
       )
      
  }


}
