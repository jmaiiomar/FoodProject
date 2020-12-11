import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/modele/Categorie';
import { CommandeProduit } from 'src/app/modele/CommandeProduit';
import { Product } from 'src/app/modele/Product';
import { CategorieService } from 'src/app/service/categorie.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  //  myForm: FormGroup;
  //  myForm: FormGroup;
  ListProduct: Product[];
  ListProduct2: Product[] = [];
  ListProductpanier: Product[] = [];

  Commande: CommandeProduit[] = [];


  c: any[];
  myform: FormGroup;

  constructor(private fb: FormBuilder, private Cs: CategorieService, private Ps: ProductService, private router: Router, private route: ActivatedRoute) {
    let formControls = {
      quantite: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9.'-]+")
      ])
    }
    this.myform = this.fb.group(formControls);
  }
  id: any;
  x: boolean;
  ngOnInit(): void {
    if(localStorage.getItem('Panier')!=null)
    {JSON.parse(localStorage['Panier']).forEach(element => {

      this.ListProductpanier.push(element['produit']);
    });}
    else
    {
      this.ListProductpanier=[];
    }
   
    this.x=false;
    /**//////////////////////// */
    this.route.paramMap.subscribe(params => {
      this.id = params.get('categorieId');
    });



    /************* catgeorie************* */
    this.Cs.findbyId(this.id).subscribe(data => {
      this.c = data;
    });


    /*************Product of categorie ************* */

    this.Ps.getAllPoduct().subscribe(
      (data: any[]) => {
        this.ListProduct = data;
        let i = this.ListProduct.length;
        this.ListProduct.forEach(element => {
           if (element.categorieProduct['categorie'][0]['id'] === this.c[0]['id']) {
            let prd = new Product();
            prd = element;
            this.ListProduct2.push(prd);
          }

          //console.log(this.ListProduct2)
        });
      }
    );

  }

  command(product: Product) {

    let data = this.myform.value.quantite;
    let panier = new CommandeProduit();
    panier.produit = product;
    panier.prix=product.prix*data;
    panier.quantite = data;
    //console.log(panier)
    if(localStorage.getItem('Panier')!=null)
    {JSON.parse(localStorage['Panier']).forEach(element => {
      if (this.Commande.find((test) => test.produit.id === element['produit'].id) == undefined) {
        this.Commande.push(element);
            }
      

    });
    console.log(this.Commande)
  }
  console.log(this.Commande.find((test) => test.produit.id === panier.id));
  if (this.Commande.find((test) => test.produit.id === panier.id) === undefined) {
    this.Commande.push(panier);
  }
 
  
    localStorage.setItem('Panier', JSON.stringify(this.Commande));
    alert('added ')
    JSON.parse(localStorage['Panier']).forEach(element => {

      this.ListProductpanier.push(element['produit']);
    });
    //localStorage['Panier'].push(this.Commande);
    /* var a = [];
     a.push(panier)
     a.push(JSON.parse(localStorage.getItem('Panier')));
     localStorage.setItem('Panier', JSON.stringify(a));*/
  }
 
  ProduitExistePanier(p: Product): boolean {
   
     if(this.ListProductpanier.find(e => e.id === p.id)==null)
     {
       return false;
     }
     else 
     return true ;
  }

}
