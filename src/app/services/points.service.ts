import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})

export class PointsService {

  public globalPoints = 0;

  constructor(private storage: Storage) {
    this.loadFromStorage();
  }

  public sumPoints(points: number = 1) {
    const sum = this.globalPoints += points;
    this.updateStorage(sum);
  }

  private async loadFromStorage() {
    const points = await this.storage.get('globalPoints') as number;
    this.globalPoints = points;
  }

  private async updateStorage(sum: number) {
    this.storage.set('globalPoints', sum);
  }
}