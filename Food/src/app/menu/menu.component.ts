import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  productnumber:number;
  constructor() { }

  ngOnInit(): void {
    //this.productnumber=localStorage['Panier'];
    this.productnumber=JSON.parse(localStorage['Panier']).length;
  
    
  }

}
