import { useState, useEffect, useRef } from 'react';

const BricksGame = () => {
  const canvasRef = useRef(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const savedScore = localStorage.getItem('highScore');
    return savedScore ? parseInt(savedScore) : 0;
  });
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const game = new Game(ctx, canvas, setIsGameOver, setScore, setHighScore, highScore);
      game.start();
    }
  }, [highScore]);

  const handleRestart = () => {
    setIsGameOver(false);
    setScore(0);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const game = new Game(ctx, canvas, setIsGameOver, setScore, setHighScore, highScore);
      game.start();
    }
  };

  const handlePause = () => {
    setIsPaused(prev => !prev);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-4xl mb-4">Bricks Game</h1>
      <canvas ref={canvasRef} width="800" height="600" className="border border-gray-500"></canvas>
      <div className="mt-4">
        <p className="text-lg">Score: {score}</p>
        <p className="text-lg">High Score: {highScore}</p>
      </div>
      {isGameOver && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl mb-4">Game Over</h2>
          <p className="mb-4">Score: {score}</p>
          <button onClick={handleRestart} className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
            Restart
          </button>
        </div>
      )}
      <button onClick={handlePause} className="mt-4 px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-600">
        {isPaused ? 'Resume' : 'Pause'}
      </button>
    </div>
  );
};

class Game {
  constructor(ctx, canvas, setIsGameOver, setScore, setHighScore, highScore) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.setIsGameOver = setIsGameOver;
    this.setScore = setScore;
    this.setHighScore = setHighScore;
    this.highScore = highScore;
    this.ballRadius = 10;
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 30;
    this.dx = 2;
    this.dy = -2;
    this.paddleHeight = 10;
    this.paddleWidth = 75;
    this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
    this.rightPressed = false;
    this.leftPressed = false;
    this.bricks = [];
    this.currentLevel = 1;
    this.totalBricks = 30;
    this.brickWidth = 50;
    this.brickHeight = 15;
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
    this.score = 0;
    this.lives = 3;
    this.isPaused = false;
    this.powerUps = [];
    this.powerUpInterval = 5000; // Power-up appears every 5 seconds
    this.lastPowerUpTime = 0;
    this.powerUpTypes = ['extraLife', 'expandPaddle'];
    
    this.init();
    this.loadAudio();
  }

  init() {
    document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
    document.addEventListener('keyup', this.keyUpHandler.bind(this), false);
    this.initBricks();
  }

  loadAudio() {
    this.hitSound = new Audio('/sounds/hit.mp3');
    this.breakSound = new Audio('/sounds/break.mp3');
    this.gameOverSound = new Audio('/sounds/gameOver.mp3');
    this.powerUpSound = new Audio('/sounds/powerUp.mp3');
  }

  initBricks() {
    this.bricks = [];
    for (let c = 0; c < Math.sqrt(this.totalBricks); c++) {
      this.bricks[c] = [];
      for (let r = 0; r < Math.sqrt(this.totalBricks); r++) {
        this.bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
  }

  drawBall() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2);
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawPaddle() {
    this.ctx.beginPath();
    this.ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawBricks() {
    for (let c = 0; c < Math.sqrt(this.totalBricks); c++) {
      for (let r = 0; r < Math.sqrt(this.totalBricks); r++) {
        if (this.bricks[c][r].status === 1) {
          const brickX = c * (this.brickWidth + this.brickPadding) + this.brickOffsetLeft;
          const brickY = r * (this.brickHeight + this.brickPadding) + this.brickOffsetTop;
          this.bricks[c][r].x = brickX;
          this.bricks[c][r].y = brickY;
          this.ctx.beginPath();
          this.ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
          this.ctx.fillStyle = '#0095DD';
          this.ctx.fill();
          this.ctx.closePath();
        }
      }
    }
  }

  drawScore() {
    this.ctx.font = '16px Arial';
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fillText('Score: ' + this.score, 8, 20);
  }

  drawLives() {
    this.ctx.font = '16px Arial';
    this.ctx.fillStyle = '#0095DD';
    this.ctx.fillText('Lives: ' + this.lives, this.canvas.width - 65, 20);
  }

  drawPowerUps() {
    this.powerUps.forEach((powerUp) => {
      this.ctx.beginPath();
      this.ctx.arc(powerUp.x, powerUp.y, 10, 0, Math.PI * 2);
      this.ctx.fillStyle = 'gold';
      this.ctx.fill();
      this.ctx.closePath();
    });
  }

  collisionDetection() {
    // Check for collisions with bricks
    for (let c = 0; c < Math.sqrt(this.totalBricks); c++) {
      for (let r = 0; r < Math.sqrt(this.totalBricks); r++) {
        const brick = this.bricks[c][r];
        if (brick.status === 1) {
          if (
            this.x > brick.x &&
            this.x < brick.x + this.brickWidth &&
            this.y > brick.y &&
            this.y < brick.y + this.brickHeight
          ) {
            this.dy = -this.dy;
            brick.status = 0;
            this.score++;
            this.setScore(this.score); // Update the score
            this.breakSound.play();
            if (this.score > this.highScore) {
              this.setHighScore(this.score);
              localStorage.setItem('highScore', this.score);
            }
            if (this.score === this.totalBricks) {
              this.currentLevel++;
              this.totalBricks += Math.sqrt(this.totalBricks); // Increase bricks count
              this.brickWidth = Math.max(this.brickWidth - 5, 20); // Decrease brick width
              this.brickHeight = Math.max(this.brickHeight - 2, 10); // Decrease brick height
              this.initBricks(); // Reinitialize bricks
              this.score = 0; // Reset score for next level
            }
          }
        }
      }
    }

    // Check for collisions with power-ups
    this.powerUps.forEach((powerUp, index) => {
      if (
        this.x > powerUp.x - 10 &&
        this.x < powerUp.x + 10 &&
        this.y > powerUp.y - 10 &&
        this.y < powerUp.y + 10
      ) {
        this.powerUpSound.play();
        this.activatePowerUp(powerUp.type);
        this.powerUps.splice(index, 1); // Remove the power-up from the array
      }
    });
  }

  activatePowerUp(type) {
    switch (type) {
      case 'extraLife':
        this.lives++;
        break;
      case 'expandPaddle':
        this.paddleWidth += 20;
        break;
      default:
        break;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBricks();
    this.drawBall();
    this.drawPaddle();
    this.drawScore();
    this.drawLives();
    this.drawPowerUps();
    this.collisionDetection();
    this.moveBall();
    this.movePaddle();
    this.updatePowerUps();
    
    if (!this.isPaused) {
      requestAnimationFrame(this.draw.bind(this));
    }
  }

  moveBall() {
    if (this.x + this.dx > this.canvas.width - this.ballRadius || this.x + this.dx < this.ballRadius) {
      this.dx = -this.dx;
    }
    if (this.y + this.dy < this.ballRadius) {
      this.dy = -this.dy;
    } else if (this.y + this.dy > this.canvas.height - this.ballRadius) {
      if (this.x > this.paddleX && this.x < this.paddleX + this.paddleWidth) {
        this.dy = -this.dy;
      } else {
        this.lives--;
        if (!this.lives) {
          this.setIsGameOver(true);
          this.gameOverSound.play();
          return;
        } else {
          this.x = this.canvas.width / 2;
          this.y = this.canvas.height - 30;
          this.dx = 2;
          this.dy = -2;
          this.paddleX = (this.canvas.width - this.paddleWidth) / 2;
        }
      }
    }
  }

  movePaddle() {
    if (this.rightPressed && this.paddleX < this.canvas.width - this.paddleWidth) {
      this.paddleX += 7;
    } else if (this.leftPressed && this.paddleX > 0) {
      this.paddleX -= 7;
    }
  }

  keyDownHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = true;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
      this.rightPressed = false;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  updatePowerUps() {
    const now = Date.now();
    if (now - this.lastPowerUpTime > this.powerUpInterval) {
      if (Math.random() < 0.1) {
        const powerUpType = this.powerUpTypes[Math.floor(Math.random() * this.powerUpTypes.length)];
        this.powerUps.push({
          x: Math.random() * (this.canvas.width - 20) + 10,
          y: 0,
          type: powerUpType
        });
      }
      this.lastPowerUpTime = now;
    }

    this.powerUps.forEach((powerUp) => {
      powerUp.y += 2;
    });
  }

  start() {
    this.draw();
  }
}

export default BricksGame;