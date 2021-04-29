import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';

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

}
