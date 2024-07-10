import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';
import { BsComponent } from './bs/bs.component';
import { ImgComponent } from './img/img.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { App3Component } from './app3/app3.component';
import { App4Component } from './app4/app4.component';
import { App5Component } from './app5/app5.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';
import { CompPersonneComponent } from './comp-personne/comp-personne.component';
import { CompArticle1Component } from './comp-article1/comp-article1.component';
import { CompArticle2Component } from './comp-article2/comp-article2.component';
import { App6Component } from './app6/app6.component';
import { App7Component } from './app7/app7.component';
import { App8Component } from './app8/app8.component';
import { App9Component } from './app9/app9.component';
import { App10Component } from './app10/app10.component';
import { CompRandomComponent } from './comp-random/comp-random.component';
import { Session1Component } from './session1/session1.component';
import { Session2Component } from './session2/session2.component';
import { CompSessionComponent } from './comp-session/comp-session.component';
import { Comp7Component } from './comp7/comp7.component';
import { ClientSession2Component } from './client-session2/client-session2.component';
import { CompClientSession1Component } from './comp-client-session1/comp-client-session1.component';
import { CompClientSession2Component } from './comp-client-session2/comp-client-session2.component';
import { FindallComponent } from './findall/findall.component';
import { CompFindallComponent } from './comp-findall/comp-findall.component';
import { Findallv2Component } from './findallv2/findallv2.component';
import { CompFindallv2Component } from './comp-findallv2/comp-findallv2.component';
import { FindidComponent } from './findid/findid.component';
import { FindbyidComponent } from './findbyid/findbyid.component';
import { Createv1Component } from './createv1/createv1.component';
import { Createv2Component } from './createv2/createv2.component';
import { CompFindbyidComponent } from './comp-findbyid/comp-findbyid.component';
import { CompCreateComponent } from './comp-create/comp-create.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { CompDeletev1Component } from './comp-deletev1/comp-deletev1.component';
import { CompDeletev2Component } from './comp-deletev2/comp-deletev2.component';
import { CompFactureComponent } from './comp-facture/comp-facture.component';
import { Createv3Component } from './createv3/createv3.component';
import { Deletev2Component } from './deletev2/deletev2.component';
import { CompUpdateComponent } from './comp-update/comp-update.component';
import { CompCreatev2Component } from './comp-createv2/comp-createv2.component';
import { CompDeletev3Component } from './comp-deletev3/comp-deletev3.component';
import { Createv4Component } from './createv4/createv4.component';
import { Findallv3Component } from './findallv3/findallv3.component';
import { CompCreatev3Component } from './comp-createv3/comp-createv3.component';
import { CompFindallv3Component } from './comp-findallv3/comp-findallv3.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'app1', component: App1Component},
  { path: 'app2', component: App2Component},
  { path: 'app3', component: App3Component},
  { path: 'app4', component: App4Component},
  { path: 'app5', component: App5Component},
  { path: 'app6', component: App6Component},
  { path: 'app7', component: App7Component},
  { path: 'app8', component: App8Component},
  { path: 'app9', component: App9Component},
  { path: 'app10', component: App10Component},
  { path: 'bs', component: BsComponent},
  { path: 'img', component: ImgComponent},
  { path: 'caroussel', component: CarousselComponent},
  { path: 'comp1', component: Comp1Component},
  { path: 'comp2', component: Comp2Component},
  { path: 'comp3', component: Comp3Component},
  { path: 'comp4', component: Comp4Component},
  { path: 'comp5', component: Comp5Component},
  { path: 'comp6', component: Comp6Component},
  { path: 'comp7', component: Comp7Component},
  { path: 'compPersonne', component: CompPersonneComponent},
  { path: 'compArticle1', component: CompArticle1Component},
  { path: 'compArticle2', component: CompArticle2Component},
  { path: 'compRandom', component: CompRandomComponent},
  { path: 'session1', component: Session1Component},
  { path: 'session2', component: Session2Component},
  { path: 'clientSession1', component: ClientSession2Component},
  { path: 'clientSession2', component: ClientSession2Component},
  { path: 'compClientSession1', component: CompClientSession1Component},
  { path: 'compClientSession2', component: CompClientSession2Component},
  { path: 'compSession', component: CompSessionComponent},
  { path: 'findall', component: FindallComponent},
  { path: 'findallv2', component: Findallv2Component},
  { path: 'findallv3', component: Findallv3Component},
  { path: 'compFindall', component: CompFindallComponent},
  { path: 'compFindallv2', component: CompFindallv2Component},
  { path: 'compFindallv3', component: CompFindallv3Component},
  { path: 'findid/:id', component: FindidComponent},
  { path: 'findbyid/:id', component: FindbyidComponent},
  { path: 'compFindbyid/:reference', component: CompFindbyidComponent},
  { path: 'compCreate', component: CompCreateComponent},
  { path: 'compCreatev2', component: CompCreatev2Component},
  { path: 'compCreatev3', component: CompCreatev3Component},
  { path: 'compUpdate/:reference', component: CompUpdateComponent},
  { path: 'createv1', component: Createv1Component},
  { path: 'createv2', component: Createv2Component},
  { path: 'createv3', component: Createv3Component},
  { path: 'createv4', component: Createv4Component},
  { path: 'delete/:id', component: DeleteComponent},
  { path: 'update/:id', component: UpdateComponent},
  { path: 'compDeletev1/:reference', component: CompDeletev1Component},
  { path: 'compDeletev2', component: CompDeletev2Component},
  { path: 'compDeletev3', component: CompDeletev3Component},
  { path: 'compFacture', component: CompFactureComponent},
  { path: 'deletev2', component: Deletev2Component},
  { path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
