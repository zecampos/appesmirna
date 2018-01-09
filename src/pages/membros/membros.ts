import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AdicionarMembrosPage} from '../adicionar-membros/adicionar-membros'
import { MembroPage } from '../membro/membro';
import { Back4Provider} from '../../providers/back4/back4';
import { ActionSheetController } from 'ionic-angular';


@Component({
  selector: 'page-membros',
  templateUrl: 'membros.html'
})
export class MembrosPage {
private membro = []
private disabled = false;
  constructor(public navCtrl: NavController,
              private  back4: Back4Provider,
              public actionSheetCtrl: ActionSheetController
            ) {
    this.getmembros()
  }
  goToMembro(params){
    if (!params) params = {};
    this.navCtrl.push(MembroPage);
  }
  goToAddmembro(){
    console.log('clicou')
      this.navCtrl.push(AdicionarMembrosPage);
  }
  getmembros(){
    this.back4.getMembros().subscribe(data => this.membro = data.results);
    this.disabled = true;
  }
  getMembro(id){

    this.navCtrl.push(MembroPage,{id:id});
  }

  


}
