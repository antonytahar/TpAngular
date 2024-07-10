import { Adresse } from "./adresse";
import { Employe } from "./employe";

export class EmployeInfo {
    info:string;
    adr:Adresse;
    emp:Employe;

    getInformation()
    {
        return this.info+"  "+this.adr.cp+"  "+this.emp.nom;
    }
}


