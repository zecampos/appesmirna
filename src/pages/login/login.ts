import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MembrosPage } from '../membros/membros';
import { MembroPage } from '../membro/membro';
import { CLulasPage } from '../c-lulas/c-lulas';
import { CLulaPage } from '../c-lula/c-lula';
import { Back4Provider} from '../../providers/back4/back4';
import { Storage, } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
private username = '';
private senha = '';


  constructor(public navCtrl: NavController,
              private  back4: Back4Provider,
              private storage: Storage,
              private toastCtrl: ToastController) {
  }
  logar(username, senha){
    this.back4.logar(this.username,this.senha)
    .subscribe(
    data =>{localStorage.setItem('id',data.objectId),localStorage.setItem('username',data.username),localStorage.setItem('email',data.email),localStorage.setItem('token',data.sessionToken)
    this.navCtrl.push(HomePage)
    this.successMsg(data.username)
    console.log(data)
  },
    error => {console.log(error),
    this.errorMsg()
  }


  )


  }
  errorMsg() {
  let toast = this.toastCtrl.create({
    message: 'usuário/Senha inválido',
    duration: 2000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
  }
  successMsg(msg) {
  let toast = this.toastCtrl.create({
    message: 'Bem vindo ' + msg,
    duration: 2000,
    position: 'middle'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToMembros(params){
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
