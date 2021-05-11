import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';

@Component({
  selector: 'app-jokenpo',
  templateUrl: './jokenpo.page.html',
  styleUrls: ['./jokenpo.page.scss'],
})

export class JokenpoPage implements OnInit {

  userScore = 0;
  compScore = 0;
  userSelected: string;
  compSelected: string;
  action: string;
  status: string;
  globalPoints: number;
  compWeapons = [
    'pedra',
    'papel',
    'tesoura'
  ];

  constructor(private pointsService: PointsService) {
    this.globalPoints = this.pointsService.globalPoints;
  }

  ngOnInit() {
    this.userScore = 0;
    this.compScore = 0;
  }

  userPick(userWeapon: string): void {
    this.userSelected = userWeapon;
    // console.log(this.userSelected);
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 3);
      this.compSelected = this.compWeapons[randomNum];
      // console.log(this.compSelected);
      this.checkResult();
    }, 1500);
  }

  clearField() {
    setTimeout(() => {
      this.status = '';
      this.userSelected = '';
      this.compSelected = '';
    }, 3000);
  }

  win(user, comp) {
    this.userScore++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'ganha de';
    this.status = '. \n Você ganhou!';
    this.clearField();
  }


  lose(user, comp) {
    this.compScore++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'perde de';
    this.status = '. \n Você perdeu!';
    this.clearField();
  }

  draw(user, comp) {
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'e';
    this.status = '. \n Empate!';
    this.clearField();
  }

  checkResult() {
    const userChoice = this.userSelected;
    const compChoice = this.compSelected;
    switch (userChoice + compChoice) {
      case 'pedratesoura':
      case 'papelpedra':
      case 'tesourapapel':
        this.win(userChoice, compChoice);
        break;
      case 'pedrapapel':
      case 'tesourapedra':
      case 'papeltesoura':
        this.lose(userChoice, compChoice);
        break;
      default:
        this.draw(userChoice, compChoice);
        break;
    }
  }
}
