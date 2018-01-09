import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CLulaPage } from '../c-lula/c-lula';
import {CadastrarCLulaPage} from '../cadastrar-clula/cadastrar-clula'
import { Back4Provider} from '../../providers/back4/back4';

@Component({
  selector: 'page-c-lulas',
  templateUrl: 'c-lulas.html'
})
export class CLulasPage {
celulas=[]
  constructor(public navCtrl: NavController,
              private  back4: Back4Provider,

            ) {
      this.getCelulas()

  }
  goToCLula(params){
    if (!params) params = {};
    this.navCtrl.push(CLulaPage);
  }
  addCelula(){
    this.navCtrl.push(CadastrarCLulaPage)
  }
  getCelulas(){
    this.back4.getCelulas().subscribe(data => this.celulas = data.results)

  }
  getCelula(id){
    this.navCtrl.push(CLulaPage,{id:id});
  }
}
