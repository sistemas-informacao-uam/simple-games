import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.page.html',
  styleUrls: ['./snake.page.scss'],
})
export class SnakePage implements OnInit {

  board: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D
  speed: number
  speed_x: number = 0
  speed_y: number = 0
  snake_x: number = 10
  snake_y: number = 10
  snake_length: number = 20
  board_squares: number = 20
  square_size: number = 1080 / 20
  apple_x: number = 15
  apple_y: number = 15
  trail: {
    x: number,
    y: number
  }[] = []
  tail: number = 5
  isGameOver: boolean
  score = 0
  globalPoints: number;
  pointsMultiplier: number;
  difficulty: string;
  interval;

  constructor(private pointsService: PointsService) {
    this.globalPoints = this.pointsService.globalPoints;
  }

  ngOnInit() {
    this.board = document.querySelector("#snake-game-board")
    this.ctx = this.board.getContext("2d");
    this.isGameOver = true;
    this.difficulty = "";

    document.addEventListener("keydown", (event) => this.handleMovement(event))

    this.main();
  }

  setDifficulty(difficulty) {
    this.difficulty = difficulty;

    if (this.difficulty == "noob") {
      this.speed = 80;
      this.pointsMultiplier = 1;
    }
    if (this.difficulty == "casual") {
      this.speed = 60;
      this.pointsMultiplier = 2;
    }
    if (this.difficulty == "pro") {
      this.speed = 30;
      this.pointsMultiplier = 3;
    }

    clearInterval(this.interval);

    this.isGameOver = false;
    this.main();
  }

  main() {
    this.interval = setInterval(() => this.game(this.ctx), this.speed)
  }

  game(ctx) {
    this.snake_x += this.speed_x;
    this.snake_y += this.speed_y;

    if (this.snake_x < 0) this.snake_x = this.board_squares - 1;
    if (this.snake_x > this.board_squares - 1) this.snake_x = 0;

    if (this.snake_y < 0) this.snake_y = this.board_squares - 1;
    if (this.snake_y > this.board_squares - 1) this.snake_y = 0;

    ctx.fillStyle = "lime";
    ctx.fillRect(0, 0, this.board.width, this.board.height);

    ctx.fillStyle = "red";
    ctx.fillRect(this.apple_x * this.square_size, this.apple_y * this.square_size, this.square_size, this.square_size);

    ctx.fillStyle = "blue"
    this.trail.forEach(({ x, y }) => {
      ctx.fillRect(x * this.square_size, y * this.square_size, this.square_size, this.square_size);

      if (x == this.snake_x && y == this.snake_y && this.tail > 5) this.gameOver();
    });

    this.trail.push({
      x: this.snake_x,
      y: this.snake_y
    })

    while (this.trail.length > this.tail) this.trail.shift();

    this.catchedApple();
    this.globalPoints = this.pointsService.globalPoints;
  }

  catchedApple() {
    if (this.apple_x == this.snake_x && this.apple_y == this.snake_y) {
      this.tail++;
      this.apple_x = Math.floor(Math.random() * this.board_squares);
      this.apple_y = Math.floor(Math.random() * this.board_squares);

      this.score++
      this.addGlobalPoints();
    }
  }

  addGlobalPoints() {
    let sumPoints = 0;

    if (this.score == 5) {
      sumPoints = 1
    } else if (this.score == 10) {
      sumPoints = 4;
    } else if (this.score == 20) {
      sumPoints = 12;
    } else if (this.score > 20) {
      sumPoints = 1;
    }

    sumPoints *= this.pointsMultiplier;
    this.pointsService.sumPoints(sumPoints);
  }

  gameOver() {
    this.isGameOver = true;
    this.ctx.globalAlpha = 0.3;
    this.speed_x = this.speed_y = 0;
    this.tail = 5;

    this.board.style.opacity = "0.5";
  }

  newGame() {
    this.score = 0;
    this.isGameOver = false;
    this.ctx.globalAlpha = 1;
    this.board.style.opacity = "1";
  }

  handleMovement(event, arrow?) {
    if (this.isGameOver) return;

    const keyCode = event ? event.keyCode : arrow;
    const squares_per_move = 1;

    switch (keyCode) {
      case 37: // left
        if (this.speed_x > 0) return;
        this.speed_x = -squares_per_move;
        this.speed_y = 0;
        break;
      case 38: // up
        if (this.speed_y > 0) return;
        this.speed_x = 0;
        this.speed_y = -squares_per_move;
        break;
      case 39: // right
        if (this.speed_x < 0) return;
        this.speed_x = +squares_per_move;
        this.speed_y = 0;
        break;
      case 40: // down
        if (this.speed_y < 0) return;
        this.speed_x = 0;
        this.speed_y = +squares_per_move;
        break;
    }
  }
}
