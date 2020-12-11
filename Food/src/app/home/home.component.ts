import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../service/categorie.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ListCategories: any[];
  constructor(private Cs: CategorieService) { }

  ngOnInit(): void {
    this.Cs.getCategories().subscribe(
      (data: any[]) => {
        this.ListCategories = data;
      }
    );
  }

}
