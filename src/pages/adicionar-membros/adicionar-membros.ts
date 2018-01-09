import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Back4Provider} from '../../providers/back4/back4';
@Component({
  selector: 'page-adicionar-membros',
  templateUrl: 'adicionar-membros.html'
})
export class AdicionarMembrosPage {
private membro = {
  nome: ''
}
  constructor(public navCtrl: NavController,
              private  back4: Back4Provider,
              private toastCtrl: ToastController
            )
   { }

   cadastrarmembro(){
     console.log(this.membro)
     this.back4.postmembros(this.membro).subscribe(data => console.log(data))
     this.msgCriar();
    this.navCtrl.pop();
   }

   msgCriar() {
   let toast = this.toastCtrl.create({
     message: 'Membro '+ this.membro.nome + ' Criado',
     duration: 2000,
     position: 'top'
   });

   toast.onDidDismiss(() => {
     console.log('Dismissed toast');
   });

   toast.present();
   }

}
