import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogodavelha',
  templateUrl: './jogodavelha.page.html',
  styleUrls: ['./jogodavelha.page.scss'],
})
export class JogodavelhaPage implements OnInit {

  squares: string[];
  xIsNext: boolean;
  winner: string;
  empateCounter = 0;
  empate = false;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.empateCounter = 0;
    this.empate = false;
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(index: number) {
    if (!this.squares[index]) {
      this.empateCounter++;
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    //Combinações vencedoras
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    //Compara a sequencia de caracteres
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    if(this.empateCounter >= 9) {
      this.empate = true;
    }
    return null;
  }
}
