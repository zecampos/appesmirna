import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MembrosPage } from '../membros/membros';
import { MembroPage } from '../membro/membro';
import { CLulasPage } from '../c-lulas/c-lulas';
import { CLulaPage } from '../c-lula/c-lula';
import {LoginPage} from '../login/login'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  sair(){
    console.log('clicou')
    localStorage.clear()
    this.navCtrl.push(LoginPage)
  }
  goToMembros(params){
    if (!params) params = {};
    this.navCtrl.push(MembrosPage);
  }goToMembro(params){
    if (!params) params = {};
    this.navCtrl.push(MembroPage);
  }goToCLulas(params){
    if (!params) params = {};
    this.navCtrl.push(CLulasPage);
  }goToCLula(params){
    if (!params) params = {};
    this.navCtrl.push(CLulaPage);
  }
}
