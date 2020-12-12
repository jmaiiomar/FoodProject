import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  productnumber:number;
  constructor(private Us:UserService) { }

  ngOnInit(): void {
    //this.productnumber=localStorage['Panier'];
    if(this.Us.isLoggedIn)
   { this.productnumber=JSON.parse(localStorage['Panier']).length;}
   else 
   {
    this.productnumber=0;
   }
  
    
  }
  logout()
  {
this.Us.logout();
  }

}
