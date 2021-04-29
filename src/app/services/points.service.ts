import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PointsService {

  public globalPoints = 0;

  constructor() { }

  public sumPoints() {
    this.globalPoints++;
  }
}
