import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  displayAnimation = 'none';
  displayButtons = 'flex';

  options: AnimationOptions = {
    path: '../assets/animation/loading-bar.json',
  };

  constructor(
    private router: Router
  ) {}

  loadingGame(page: string){
    this.displayAnimation='flex';
    this.displayButtons='none';

    setTimeout(() => {
      this.displayAnimation='none';
      this.displayButtons='flex';
      this.router.navigate(['home', page]);
    }, 3000);
  }

}
