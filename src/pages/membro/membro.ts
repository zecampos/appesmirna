import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Back4Provider} from '../../providers/back4/back4';
import { Membro} from '../../app/Membro.model'
import * as _ from 'lodash';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-membro',
  templateUrl: 'membro.html'
})
export class MembroPage {
private   membro = {} as Membro;
disabled = true;
ativar = false;

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private  back4: Back4Provider,
              private toastCtrl: ToastController
            ) {
    let id = navParams.get('id')

    this.back4.getMembro(id).subscribe(data => this.membro = data)

  }
  editar(){
    this.disabled = false;
    this.ativar= true;
  }
  salvar(id){
    this.back4.editarMembro(id, _.omit(this.membro,['updatedAt','createdAt' ])).subscribe(data => console.log(data))
    this.msgEditar();
    this.navCtrl.pop();

  }
  excluir(id){
    this.back4.deletarmembro(id).subscribe(data => console.log(data))
    this.msgExcluir();
    this.navCtrl.pop();
  }
  msgExcluir() {
  let toast = this.toastCtrl.create({
    message: 'Membro Excluido',
    duration: 2000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

msgEditar() {
let toast = this.toastCtrl.create({
  message: 'Membro Alterado',
  duration: 2000,
  position: 'top'
});

toast.onDidDismiss(() => {
  console.log('Dismissed toast');
});

toast.present();
}

}
