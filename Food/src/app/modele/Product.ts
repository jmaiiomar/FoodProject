import { Categorie } from './Categorie';

export class Product {
    categorieProduct: Categorie;
     id: string;
      name: string;
      description: string;
      image: string;
      prix: number;
  

    setId(id:string)
    {
        this.id=id;
    }
    getId(): string
    {
        return this.id;
    }
    setName(name:string)
    {
        this.name=name;
    }
    getName()
    {
        return this.name;
    }
    setDescription(desc:string)
    {
        this.description=desc;
    }
    getDescription()
    {
        return this.description;
    }
    getImage()
    {
        return this.image;
    }
    getPrix()
    {
        return this.prix;
    }

}
