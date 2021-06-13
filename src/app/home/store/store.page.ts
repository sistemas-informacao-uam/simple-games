import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';
import { Dialog } from '@capacitor/dialog';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
  providers: [SocialSharing]
})

export class StorePage implements OnInit {

  globalPoints: number;

  constructor(
    private pointsService: PointsService,
    private socialSharing: SocialSharing
  ) {
    this.globalPoints = this.pointsService.globalPoints;
  }

  ngOnInit() {
  }

  async showConfirm() {
    const { value } = await Dialog.confirm({
      title: 'Confirm',
      message: `Confirmar a compra ?`,
    });

    console.log('Confirmed:', value);
  };

  async CompartilharConquistas() {
    this.socialSharing.share('Olhem minhas conquistas! Pontuação total: ' + this.globalPoints)
  };
}
