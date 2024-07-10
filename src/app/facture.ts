import { Ligne } from "./ligne"

export class Facture {
    client: string
    lignes: Array<Ligne>
    prixTotal:number

    constructor(client:string,lignes:Array<Ligne>){
        this.client=client
        this.lignes = lignes
        this.calculPrixTotal(lignes); // Calculer le prix total immédiatement après l'instanciation
      }

      private calculPrixTotal(lignes:Array<Ligne>): void {
        this.prixTotal = 0;
        this.lignes.forEach(ligne => {
            this.prixTotal+=ligne.prixLigne
        });
      }
    

    getInfo() {
        let str = '';
        str += `Client : ${this.client} ->`
        this.lignes.forEach(ligne => {
            str += ligne.getInfo()+" --- "
        });
        str+= ' | Prix Total : '+this.prixTotal;
        return str
    }

}
