import { Component, OnInit } from '@angular/core';

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
  isGameOver
  score = 0
  max_score = 0

  constructor() { }

  ngOnInit() {
    this.board = document.querySelector("#snake-game-board")
    this.ctx = this.board.getContext("2d");
    this.isGameOver = false;
    this.speed = 60;

    document.addEventListener("keydown", (event) => this.handleMovement(event))

    this.main();
  }

  main() {
    setInterval(() => this.game(this.ctx), this.speed)
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

    this.catchedApple()
  }

  catchedApple() {
    if (this.apple_x == this.snake_x && this.apple_y == this.snake_y) {
      this.tail++;
      this.apple_x = Math.floor(Math.random() * this.board_squares);
      this.apple_y = Math.floor(Math.random() * this.board_squares);

      if (this.max_score == this.score) this.max_score++;

      this.score++
    }
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
