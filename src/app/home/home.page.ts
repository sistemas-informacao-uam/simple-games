import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  displayAnimation = 'none';
  displayButtons = 'flex';
  fraseMotivacional = "";

  options: AnimationOptions = {
    path: '../assets/animation/loading-bar.json',
  };

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.api().then((response) => {
      this.fraseMotivacional = response;
    })
  }

  async api() {
    const url = 'https://api-frases-node.herokuapp.com/';
    const result = await axios.get(url);
    return result.data.msg;
  }

  loadingGame(page: string) {
    this.displayAnimation = 'flex';
    this.displayButtons = 'none';

    setTimeout(() => {
      this.displayAnimation = 'none';
      this.displayButtons = 'flex';
      this.router.navigate(['home', page]);
    }, 1000);
  }

}
