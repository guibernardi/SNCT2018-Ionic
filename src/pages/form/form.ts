import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Aluno } from '../../domain/aluno';
import { ResultPage } from '../result/result';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {

    public aluno: Aluno;

    constructor(public navCtrl: NavController,
		public navParams: NavParams,
        public _alertCtrl: AlertController) {
            this.aluno = new Aluno(null, null, null, null, null);
        }

    cancelarCadastro() {
        this.navCtrl.pop();
    }

    confirmarCadastro() {
        this.navCtrl.push(ResultPage, {
            aluno: this.aluno
          });
        console.log(this.aluno);
    }
}
