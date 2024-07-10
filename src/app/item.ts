export class Item {
    reference: string;
    marque: string;
    prix: number;

    getInfo()
    {
        const description = this.prix < 100? "pas cher" : "cher";
        return "Reference :" + this.reference+"   "+this.marque.toUpperCase()+"   "+this.prix+"€"+"   "+description;
    }

}
