import React, { useState, useEffect } from 'react';

const PIECE_SHAPES = [
  { shape: [[1, 1, 1, 1]], color: 'cyan' },  // I-piece
  { shape: [[1, 1], [1, 1]], color: 'yellow' },  // O-piece
  { shape: [[0, 1, 0], [1, 1, 1]], color: 'purple' },  // T-piece
  { shape: [[1, 1, 0], [0, 1, 1]], color: 'red' },  // Z-piece
  { shape: [[0, 1, 1], [1, 1, 0]], color: 'green' },  // S-piece
  { shape: [[1, 1, 1], [1, 0, 0]], color: 'orange' },  // L-piece
  { shape: [[1, 1, 1], [0, 0, 1]], color: 'blue' },  // J-piece
];

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

function TetrisGame() {
  const [board, setBoard] = useState(createBoard());
  const [currentPiece, setCurrentPiece] = useState(randomPiece());
  const [nextPiece, setNextPiece] = useState(randomPiece());
  const [heldPiece, setHeldPiece] = useState(null);
  const [currentPosition, setCurrentPosition] = useState({ x: 3, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [linesCleared, setLinesCleared] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [combo, setCombo] = useState(0); // Combo tracking
  const [canHold, setCanHold] = useState(true); 
  const [ghostPosition, setGhostPosition] = useState(null); // Ghost piece

  useEffect(() => {
    const gameInterval = setInterval(() => {
      if (!isPaused) {
        movePiece('down');
      }
    }, Math.max(100, 500 - (level - 1) * 50));

    return () => clearInterval(gameInterval);
  }, [currentPiece, currentPosition, level, isPaused]);

  useEffect(() => {
    updateGhostPiece();
  }, [currentPiece, currentPosition]);

  function createBoard() {
    return Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0));
  }

  function randomPiece() {
    const randomIndex = Math.floor(Math.random() * PIECE_SHAPES.length);
    return PIECE_SHAPES[randomIndex];
  }

  function movePiece(direction) {
    const newPosition = { ...currentPosition };

    switch (direction) {
      case 'left':
        newPosition.x -= 1;
        break;
      case 'right':
        newPosition.x += 1;
        break;
      case 'down':
        newPosition.y += 1;
        break;
      case 'hardDrop':
        while (isPositionValid(newPosition)) {
          newPosition.y += 1;
        }
        newPosition.y -= 1;
        break;
      default:
        break;
    }

    if (isPositionValid(newPosition)) {
      setCurrentPosition(newPosition);
    } else if (direction === 'down' || direction === 'hardDrop') {
      lockPiece();
    }
  }

  function rotatePiece() {
    const rotatedShape = currentPiece.shape[0].map((_, i) =>
      currentPiece.shape.map(row => row[i])
    ).reverse();

    const rotatedPiece = { ...currentPiece, shape: rotatedShape };

    if (isPositionValid(currentPosition, rotatedPiece)) {
      setCurrentPiece(rotatedPiece);
    }
  }

  function holdPiece() {
    if (canHold) {
      if (heldPiece) {
        const temp = heldPiece;
        setHeldPiece(currentPiece);
        setCurrentPiece(temp);
        setCurrentPosition({ x: 3, y: 0 });
      } else {
        setHeldPiece(currentPiece);
        setCurrentPiece(nextPiece);
        setNextPiece(randomPiece());
        setCurrentPosition({ x: 3, y: 0 });
      }
      setCanHold(false);
    }
  }

  function isPositionValid(position, piece = currentPiece) {
    for (let i = 0; i < piece.shape.length; i++) {
      for (let j = 0; j < piece.shape[i].length; j++) {
        if (piece.shape[i][j]) {
          const x = position.x + j;
          const y = position.y + i;

          if (x < 0 || x >= BOARD_WIDTH || y >= BOARD_HEIGHT || (y >= 0 && board[y][x])) {
            return false;
          }
        }
      }
    }
    return true;
  }

  function lockPiece() {
    const newBoard = [...board];

    currentPiece.shape.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell) {
          const x = currentPosition.x + j;
          const y = currentPosition.y + i;
          if (y >= 0) newBoard[y][x] = currentPiece.color;
        }
      });
    });

    clearFullRows(newBoard);
    setCurrentPiece(nextPiece); // Use the next piece
    setNextPiece(randomPiece()); // Set a new next piece
    setCurrentPosition({ x: 3, y: 0 });
    setCanHold(true);

    if (!isPositionValid({ x: 3, y: 0 })) {
      setGameOver(true);
    }
  }

  function clearFullRows(newBoard) {
    const newRows = newBoard.filter(row => row.some(cell => !cell));
    const clearedLines = BOARD_HEIGHT - newRows.length;
    const emptyRows = Array.from({ length: clearedLines }, () => Array(BOARD_WIDTH).fill(0));

    if (clearedLines > 0) {
      const comboMultiplier = combo > 0 ? combo : 1;
      setScore(prev => prev + clearedLines * 100 * level * comboMultiplier); // Combo-based scoring
      setLinesCleared(prev => prev + clearedLines);
      setBoard([...emptyRows, ...newRows]);
      setCombo(prev => prev + 1); // Increase combo counter
      if (linesCleared + clearedLines >= level * 10) {
        setLevel(prev => prev + 1);
      }
    } else {
      setCombo(0); // Reset combo if no lines cleared
    }
  }

  function handleKeyPress(e) {
    if (gameOver) return;

    switch (e.key) {
      case 'ArrowLeft':
        movePiece('left');
        break;
      case 'ArrowRight':
        movePiece('right');
        break;
      case 'ArrowDown':
        movePiece('down');
        break;
      case 'ArrowUp':
        rotatePiece();
        break;
      case ' ':
        movePiece('hardDrop');
        break;
      case 'c':
        holdPiece();
        break;
      case 'p':
        setIsPaused(!isPaused);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPiece, currentPosition]);

  function updateGhostPiece() {
    let ghostPosition = { ...currentPosition };
    while (isPositionValid(ghostPosition)) {
      ghostPosition.y += 1;
    }
    ghostPosition.y -= 1;
    setGhostPosition(ghostPosition);
  }

  return (
    <div  style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Tetris Game</h1>
      <div>Score: {score}</div>
      <div>Level: {level}</div>
      {gameOver ? (
        <div  className="game-over">
          <h2>Game Over! Final Score: {score}</h2>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Game Board */}
            <div className="tetris-game" style={{ position: 'relative', margin: '0 auto', width: `${BOARD_WIDTH * 20}px`, height: `${BOARD_HEIGHT * 20}px`, backgroundColor: '#000' }}>
            {board.map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: 'flex' }}>
                {row.map((cell, cellIndex) => (
                  <div key={cellIndex} style={{ width: '20px', height: '20px', backgroundColor: cell || 'black', border: '1px solid #333' }} />
                ))}
              </div>
            ))}

            {/* Current Piece */}
            {currentPiece.shape.map((row, i) => (
              row.map((cell, j) => (
                cell ? (
                  <div key={`${i}-${j}`} style={{ position: 'absolute', top: `${(currentPosition.y + i) * 20}px`, left: `${(currentPosition.x + j) * 20}px`, width: '20px', height: '20px', backgroundColor: currentPiece.color, border: '1px solid #333' }} />
                ) : null
              ))
            ))}

            {/* Ghost Piece */}
            {ghostPosition && currentPiece.shape.map((row, i) => (
              row.map((cell, j) => (
                cell ? (
                  <div key={`${i}-${j}`} style={{ position: 'absolute', top: `${(ghostPosition.y + i) * 20}px`, left: `${(ghostPosition.x + j) * 20}px`, width: '20px', height: '20px', backgroundColor: `${currentPiece.color}55`, border: '1px dashed #333' }} />
                ) : null
              ))
            ))}
          </div>

          {/* Next Piece */}
          <div style={{ marginLeft: '20px' }}>
            <h3>Next Piece</h3>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${nextPiece.shape[0].length}, 20px)` }}>
              {nextPiece.shape.map((row, rowIndex) => (
                row.map((cell, cellIndex) => (
                  <div key={`${rowIndex}-${cellIndex}`} style={{ width: '20px', height: '20px', backgroundColor: cell ? nextPiece.color : 'transparent', border: '1px solid #333' }} />
                ))
              ))}
            </div>

            {/* Held Piece */}
            <h3>Held Piece</h3>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${heldPiece?.shape[0].length || 0}, 20px)` }}>
              {heldPiece?.shape.map((row, rowIndex) => (
                row.map((cell, cellIndex) => (
                  <div key={`${rowIndex}-${cellIndex}`} style={{ width: '20px', height: '20px', backgroundColor: cell ? heldPiece.color : 'transparent', border: '1px solid #333' }} />
                ))
              )) || <div>None</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TetrisGame;
