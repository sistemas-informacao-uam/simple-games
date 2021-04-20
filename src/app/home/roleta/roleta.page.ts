import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roleta',
  templateUrl: './roleta.page.html',
  styleUrls: ['./roleta.page.scss'],
})
export class RoletaPage implements OnInit {

  globalObjects: {
    timeInitial?: Date;
    btnPlay: HTMLElement;
    roleta: HTMLElement;
    btnStop: HTMLElement;
  };

  isPlay = false;

  constructor() { }

  ngOnInit() {
    this.globalObjects = {
      btnPlay: document.getElementById('btnPlay'),
      roleta: document.getElementById('roleta'),
      btnStop: document.getElementById('btnStop')
    };
  }

  playOnClick() {
    this.globalObjects.timeInitial = new Date();
    this.globalObjects.btnPlay.style.visibility = 'hidden';
    this.globalObjects.btnStop.style.visibility = 'visible';
    this.globalObjects.roleta.style.animation = 'roleta 2s linear infinite';

  }

  calculate() {
    const timeFinal = new Date();
    let tempo = timeFinal.getTime() - this.globalObjects.timeInitial.getTime();
    tempo = Math.abs(tempo);
    let box = tempo / 250;
    if (box > 7)
      {box = box % 8;}

    console.log(this.globalObjects.timeInitial, timeFinal, tempo, box, (tempo / 250));
    return box;
  }

  stopOnClick() {
    setTimeout(() => {
      this.globalObjects.roleta.style['animation-play-state'] = 'paused';
      this.globalObjects.btnStop.style.visibility = 'hidden';
      this.globalObjects.btnPlay.style.visibility = 'visible';
      const box = this.calculate();
      const boxGanhador = document.getElementById('opt'.concat(`${box}`));
      document.getElementById('msgGanhador').innerHTML = 'Parabéns! Você ganhou '.concat(boxGanhador.innerHTML);
    }, Math.floor(Math.random() * 1000) + 400);
  }

}
