export class Client {
    nom: string;
    prenom: string;

    getInfo()
    {
        return this.nom.toUpperCase()+"   "+this.prenom.toLowerCase();
    }
}
