import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})

export class StorePage implements OnInit {

  globalPoints: number;

  constructor(
    private pointsService: PointsService
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
}
