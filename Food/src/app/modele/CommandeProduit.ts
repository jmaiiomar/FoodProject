import { Product } from './Product';
import { User } from './Users';

export class CommandeProduit{
    
    id:string;
    produit:Product;
    quantite:number;
    user:User;
}