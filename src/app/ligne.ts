import { Item } from "./item"

export class Ligne {
    quantite:number
    item:Item
    prixLigne:number

    
    constructor(quantite: number, item: Item) {
        this.quantite = quantite;
        this.item = item;
        this.calculPrixLigne(); // Calculer le prix de la ligne immédiatement après l'instanciation
      }

      private calculPrixLigne(): void {
        this.prixLigne = this.item.prix * this.quantite;
      }

    getInfo(){
        return "Qte : "+this.quantite + " " + this.item.getInfo() + " | Prix ligne: "+this.prixLigne;
    }
}
