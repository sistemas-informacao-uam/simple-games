import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coinflip',
  templateUrl: './coinflip.page.html',
  styleUrls: ['./coinflip.page.scss'],
})
export class CoinflipPage implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function(event) {
      const coin = document.getElementById('coin');
      coin.addEventListener('click', function(e) {
          const flipResult = Math.random() <= 0.5 ? 'heads' : 'tails';
          coin.className = flipResult;
          console.log(flipResult);
      }, false);
  });
  }
}
