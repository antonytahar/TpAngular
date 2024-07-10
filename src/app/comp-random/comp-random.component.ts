import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-random',
  templateUrl: './comp-random.component.html',
  styleUrls: ['./comp-random.component.css']
})
export class CompRandomComponent {
  public random: number =0;
  nbSaisi:number;
  nbTentativesMax:number;
  nbTentatives:number = 0;
  message:string='';
  isStarted:boolean =false;

  debut(){
    this.random= Math.floor(Math.random()*10+1);
    this.isStarted=true;
  }

  clickBouton(){
    this.nbTentatives++;
    if (this.nbTentativesMax >= this.nbTentatives) {
      if (this.nbSaisi == this.random) {
        this.message="Bravo, vous avez trouvé le nombre en " + this.nbTentatives;
      }else{
        if (this.nbSaisi > this.random) {
          this.message="Le nombre est plus petit";
        }else{
          this.message="Le nombre est plus grand";
        }
      }
    }else{
      this.message="Vous avez perdu";
    }
  }
}
