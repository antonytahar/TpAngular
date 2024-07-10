import { Complement } from "./complement";
import { Proprio } from "./proprio";

export class Voiture {
    matricule: string;
    marque: string;
    proprio: Proprio;
    complement: Complement;

    getInfo()
    {
        return "Matricule:"+this.matricule+" Marque: "+this.marque+" Nom proprio: "+this.proprio.nom+" Prix: "+this.complement.prix+"€";
    }

}
