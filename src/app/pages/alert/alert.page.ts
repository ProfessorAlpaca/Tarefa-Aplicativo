import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})

export class AlertPage implements OnInit {

  constructor(private alertCrt1: AlertController) { }

  ngOnInit() {
  }

  async alert() {
    const alert = await this.alertCrt1.create({
    cssClass: 'my-custom-class',
    header: 'Alerta',
    subHeader: 'Atenção',
    message: 'Esta é uma mensagem de alerta!',
    buttons: ['OK']
    });

    await alert.present();
  }

  async alertaMultiplosBotoes() {
    const alert = await this.alertCrt1.create({
    cssClass: 'my-custom-class',
    header: 'Alerta múltiplos',
    subHeader: 'Múltiplos botões',
    message: 'Esta é um alerta com múltiplos botões!',
    buttons: ['Cancelar', 'Abrir', 'Excluir']
    });

    await alert.present();
  }
  async paredao() {
    const alert = await this.alertCrt1.create({
    cssClass: 'my-custom-class',
    header: 'Botão do Paredão',
    subHeader: 'Vote no Brother!',
    message: 'Escolha um Brother para indicar ao paredão',
    buttons: ['Jean', 'Bruno', 'Pedro', 'Gabriel', 'Marcos', 'Edna']
    });

    await alert.present();
 }

 async imunidade() {
  const alert = await this.alertCrt1.create({
  cssClass: 'my-custom-class',
  header: 'Botão da Imunidade',
  subHeader: 'Imunize o Brother!',
  message: 'Escolha um Brother para imunizar do paredão',
  buttons: ['Heliel', 'Felipe', 'Hailton', 'William', 'Josephe', 'Romário']
  });

  await alert.present();
  }

async batevolta() {
  const alert = await this.alertCrt1.create({
  cssClass: 'my-custom-class',
  header: 'Botão do Bate Volta',
  subHeader: 'Salve o Brother!',
  message: 'Escolha um Brother para salvar do paredão',
  buttons: ['Lux', 'Soraka', 'Ahri', 'Taliyah', 'Seraphine', 'Clarity Snicket']
  });

  await alert.present();
  }
}
