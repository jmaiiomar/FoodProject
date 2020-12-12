import { Product } from './Product';
import { User } from './Users';

export class CommandeProduit{
    
    id:number;
    produit:Product;
    quantite:number;
    user:User;
    prix:number;
}