import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as _ from 'lodash';
import { ToastController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Back4Provider} from '../../providers/back4/back4';
import { Geolocation } from '@ionic-native/geolocation';



@Component({
  selector: 'page-c-lula',
  templateUrl: 'c-lula.html'
})
export class CLulaPage {
  private membro = []
  disabled = true;
  ativar = false;
  private celula = {
    "lat":0,
    "lon": 0
  };

  constructor(public navCtrl: NavController,
              private navParams: NavParams,
              private  back4: Back4Provider,
              private toastCtrl: ToastController,
              private geolocation: Geolocation
  ) {
    let id = navParams.get('id');
    this.back4.getCelula(id).subscribe(data => this.celula= data)
    this.getmembros()
      }
    editar(){
        this.disabled = false;
        this.ativar= true;
      }
      salvarCelula(id, data){
        this.back4.editarCelula(id,_.omit(this.celula,['updatedAt','createdAt'])).subscribe(data => console.log(data))
        this.msgEditar()
        this.navCtrl.pop();
      }
      excluir(id){
        this.back4.excluirCelula(id).subscribe(data => console.log(data))
        this.msgExcluir()
        this.navCtrl.pop();
      }

      getmembros(){
        this.back4.getMembros().subscribe(data => this.membro = data.results);

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
      msgExcluir() {
      let toast = this.toastCtrl.create({
        message: 'Célula Excluido',
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
      message: 'Célula Alterado',
      duration: 2000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
    }


}
