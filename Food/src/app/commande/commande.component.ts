import { Component, OnInit } from '@angular/core';
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

  constructor(private Cs: CommandeService) { }

  ngOnInit(): void {
    let user=new User();

    user=JSON.parse(localStorage.getItem('currentUser'));

    this.Cs.findbyUser(user).subscribe(
      (data: any[]) => {
        console.log(data);
      }
    );
  }



}
