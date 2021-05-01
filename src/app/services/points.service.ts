import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PointsService {

  public globalPoints = 0;

  constructor() { }

  public sumPoints(points: number = 1) {
    this.globalPoints += points;
  }
}
