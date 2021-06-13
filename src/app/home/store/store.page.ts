import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';
import { Dialog } from '@capacitor/dialog';
//import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
  //providers: [SocialSharing, Share]
})

export class StorePage implements OnInit {

  globalPoints: number;

  constructor(
    private pointsService: PointsService,
    //private socialSharing: SocialSharing,
    //private share: Share
  ) {
    this.globalPoints = this.pointsService.globalPoints;
  }

  ngOnInit() {
  }

  async showConfirm(points: number) {
    const balance = points - this.pointsService.globalPoints;

    if (balance > 0) {
      alert(`Você precisa de mais ${points - this.pointsService.globalPoints} para comprar esse item.`);
      return;
    }

    const { value } = await Dialog.confirm({
      title: 'Confirm',
      message: `Confirmar a compra no valor de ${points} pontos?`,
    });

    if (value) {
      this.pointsService.subPoints(points);
      alert(`Item comprado! Pontos restantes: ${this.pointsService.globalPoints}`);
    }
  };

  async CompartilharConquistas() {
    await Share.share({
      title: 'Compartilhe conquistas',
      text: 'Olhem minhas conquistas! Minha pontuação total: ' + this.globalPoints,
      dialogTitle: 'Compartilhe com amigos',
    });
    //this.socialSharing.share('Olhem minhas conquistas! Pontuação total: ' + this.globalPoints)
  };
}
