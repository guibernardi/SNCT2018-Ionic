import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Aluno } from '../../domain/aluno';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {

    public aluno: Aluno;

    constructor(public navCtrl: NavController,
		public navParams: NavParams,
        public _alertCtrl: AlertController) {
            this.aluno = navParams.get('aluno');
            console.log(this.aluno);
        }

    
    
}
