import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Back4Provider} from '../../providers/back4/back4';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';
@Component({
  selector: 'page-cadastrar-clula',
  templateUrl: 'cadastrar-clula.html'
})
export class CadastrarCLulaPage {
  private membro = []
private celula = {
  "lat":0,
  "lon": 0

}


  constructor(public navCtrl: NavController,
              private  back4: Back4Provider,
              private geolocation: Geolocation,
              private toastCtrl: ToastController
            ) {
                this.getmembros()
  }
  cadastrarCelula(){
    this.back4.cadastrarCelula(this.celula).subscribe(data => console.log(data));
    this.navCtrl.pop();
    this.msgCriar();
  }

  getPosition(){
    this.geolocation.getCurrentPosition().then(
      (resp) =>{
        console.log(resp.coords.latitude)
        this.celula.lat =  resp.coords.latitude
        this.celula.lon = resp.coords.longitude


      }
    ).catch((error) =>{
       console.log('Error getting location', error);
    })
  }
  getmembros(){
    this.back4.getMembros().subscribe(data => this.membro = data.results);

  }
  msgCriar() {
  let toast = this.toastCtrl.create({
    message: 'Célula Criada com Sucesso',
    duration: 2000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
  }
}
