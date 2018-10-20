import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormPage } from '../form/form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public _alertCtrl: AlertController) {}
    
  iniciarCadastro() {
    const confirm = this._alertCtrl.create({
      title: 'Começar o Cadastro?',
      message: 'Esta ação irá chamar o formulário',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Ação cancelada');
          }
        },
        {
          text: 'Vamos lá',
          handler: () => {
            console.log('Vamos começar');
            this.navCtrl.setRoot(FormPage);
            //this.navCtrl.push(FormPage);
          }
        }
      ]
    });
    confirm.present();
  }
}
