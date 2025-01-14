import { useState, useEffect, useCallback, useMemo } from 'react';

const CELL_SIZE = 20;
const SPEED_LEVELS = {
  EASY: 150,
  MEDIUM: 100,
  HARD: 50,
};

const FOOD_TYPES = {
  NORMAL: { color: 'bg-red-500', points: 1 },
  BONUS: { color: 'bg-yellow-500', points: 3 },
  SUPER: { color: 'bg-purple-500', points: 5 },
};

const POWER_UPS = {
  SPEED: { color: 'bg-blue-500', duration: 5000, effect: 'Temporary Speed Boost' },
  SHRINK: { color: 'bg-green-500', duration: 5000, effect: 'Shrink Snake' },
};

// Static list of flag emojis
const FLAGS = {
    AF: '🇦🇫 Afghanistan',
    AL: '🇦🇱 Albania',
    DZ: '🇩🇿 Algeria',
    AS: '🇦🇸 American Samoa',
    AD: '🇦🇩 Andorra',
    AO: '🇦🇴 Angola',
    AI: '🇦🇮 Anguilla',
    AG: '🇦🇬 Antigua and Barbuda',
    AR: '🇦🇷 Argentina',
    AM: '🇦🇲 Armenia',
    AW: '🇦🇼 Aruba',
    AU: '🇦🇺 Australia',
    AT: '🇦🇹 Austria',
    AZ: '🇦🇿 Azerbaijan',
    BS: '🇧🇸 Bahamas',
    BH: '🇧🇭 Bahrain',
    BD: '🇧🇩 Bangladesh',
    BB: '🇧🇧 Barbados',
    BY: '🇧🇾 Belarus',
    BE: '🇧🇪 Belgium',
    BZ: '🇧🇿 Belize',
    BJ: '🇧🇯 Benin',
    BM: '🇧🇲 Bermuda',
    BT: '🇧🇹 Bhutan',
    BO: '🇧🇴 Bolivia',
    BA: '🇧🇦 Bosnia and Herzegovina',
    BW: '🇧🇼 Botswana',
    BR: '🇧🇷 Brazil',
    BN: '🇧🇳 Brunei',
    BG: '🇧🇬 Bulgaria',
    BF: '🇧🇫 Burkina Faso',
    BI: '🇧🇮 Burundi',
    KH: '🇰🇭 Cambodia',
    CM: '🇨🇲 Cameroon',
    CA: '🇨🇦 Canada',
    CV: '🇨🇻 Cape Verde',
    KY: '🇰🇾 Cayman Islands',
    CF: '🇨🇫 Central African Republic',
    TD: '🇹🇩 Chad',
    CL: '🇨🇱 Chile',
    CN: '🇨🇳 China',
    CO: '🇨🇴 Colombia',
    KM: '🇰🇲 Comoros',
    CG: '🇨🇬 Congo',
    CD: '🇨🇩 Congo, Democratic Republic of the',
    CK: '🇨🇰 Cook Islands',
    CR: '🇨🇷 Costa Rica',
    CI: '🇨🇮 Côte d Ivoire',
    HR: '🇭🇷 Croatia',
    CU: '🇨🇺 Cuba',
    CW: '🇨🇼 Curaçao',
    CY: '🇨🇾 Cyprus',
    CZ: '🇨🇿 Czechia',
    DK: '🇩🇰 Denmark',
    DJ: '🇩🇯 Djibouti',
    DM: '🇩🇲 Dominica',
    DO: '🇩🇴 Dominican Republic',
    EC: '🇪🇨 Ecuador',
    EG: '🇪🇬 Egypt',
    SV: '🇸🇻 El Salvador',
    GQ: '🇲🇦 Equatorial Guinea',
    ER: '🇪🇷 Eritrea',
    EE: '🇪🇪 Estonia',
    ET: '🇪🇹 Ethiopia',
    FK: '🇫🇰 Falkland Islands',
    FO: '🇫🇴 Faroe Islands',
    FJ: '🇫🇯 Fiji',
    FI: '🇫🇮 Finland',
    FR: '🇫🇷 France',
    GF: '🇬🇫 French Guiana',
    PF: '🇵🇫 French Polynesia',
    GA: '🇬🇦 Gabon',
    GM: '🇬🇲 Gambia',
    GE: '🇬🇪 Georgia',
    DE: '🇩🇪 Germany',
    GH: '🇬🇭 Ghana',
    GI: '🇬🇮 Gibraltar',
    GR: '🇬🇷 Greece',
    GL: '🇬🇱 Greenland',
    GD: '🇬🇩 Grenada',
    GP: '🇬🇵 Guadeloupe',
    GU: '🇬🇺 Guam',
    GT: '🇲🇽 Guatemala',
    GG: '🇬🇬 Guernsey',
    GN: '🇬🇳 Guinea',
    GW: '🇬🇼 Guinea-Bissau',
    GY: '🇬🇾 Guyana',
    HT: '🇭🇹 Haiti',
    HN: '🇭🇳 Honduras',
    HK: '🇭🇰 Hong Kong',
    HU: '🇭🇺 Hungary',
    IS: '🇮🇸 Iceland',
    IN: '🇮🇳 India',
    ID: '🇮🇩 Indonesia',
    IR: '🇮🇷 Iran',
    IQ: '🇮🇶 Iraq',
    IE: '🇮🇪 Ireland',
    IM: '🇮🇲 Isle of Man',
    IL: '🇮🇱 Israel',
    IT: '🇮🇹 Italy',
    JM: '🇯🇲 Jamaica',
    JP: '🇯🇵 Japan',
    JE: '🇯🇪 Jersey',
    JO: '🇯🇴 Jordan',
    KZ: '🇰🇿 Kazakhstan',
    KE: '🇰🇪 Kenya',
    KI: '🇰🇮 Kiribati',
    KP: '🇰🇵 North Korea',
    KR: '🇰🇷 South Korea',
    KW: '🇰🇼 Kuwait',
    KG: '🇰🇬 Kyrgyzstan',
    LA: '🇱🇦 Laos',
    LV: '🇱🇻 Latvia',
    LB: '🇱🇧 Lebanon',
    LC: '🇱🇨 Saint Lucia',
    LI: '🇱🇮 Liechtenstein',
    LK: '🇱🇰 Sri Lanka',
    LS: '🇱🇸 Lesotho',
    LR: '🇱🇷 Liberia',
    LY: '🇱🇾 Libya',
    LT: '🇱🇹 Lithuania',
    LU: '🇱🇺 Luxembourg',
    MO: '🇲🇴 Macau',
    MG: '🇲🇬 Madagascar',
    MW: '🇲🇼 Malawi',
    MY: '🇲🇾 Malaysia',
    MV: '🇲🇻 Maldives',
    ML: '🇲🇱 Mali',
    MT: '🇲🇹 Malta',
    MH: '🇲🇭 Marshall Islands',
    MQ: '🇲🇶 Martinique',
    MR: '🇲🇷 Mauritania',
    MU: '🇲🇺 Mauritius',
    YT: '🇲🇶 Mayotte',
    MX: '🇲🇽 Mexico',
    FM: '🇫🇲 Micronesia',
    MD: '🇲🇩 Moldova',
    MC: '🇲🇨 Monaco',
    MN: '🇲🇳 Mongolia',
    ME: '🇲🇪 Montenegro',
    MS: '🇲🇸 Montserrat',
    MA: '🇲🇦 Morocco',
    MZ: '🇲🇿 Mozambique',
    MM: '🇲🇲 Myanmar',
    NA: '🇳🇦 Namibia',
    NR: '🇳🇷 Nauru',
    NP: '🇳🇵 Nepal',
    NL: '🇳🇱 Netherlands',
    NC: '🇳🇨 New Caledonia',
    NZ: '🇳🇿 New Zealand',
    NI: '🇳🇮 Nicaragua',
    NE: '🇳🇪 Niger',
    NG: '🇳🇬 Nigeria',
    NU: '🇳🇺 Niue',
    NF: '🇳🇫 Norfolk Island',
    MP: '🇲🇵 Northern Mariana Islands',
    NO: '🇳🇴 Norway',
    OM: '🇴🇲 Oman',
    PK: '🇵🇰 Pakistan',
    PW: '🇵🇼 Palau',
    PS: '🇵🇸 Palestine',
    PA: '🇵🇦 Panama',
    PG: '🇵🇬 Papua New Guinea',
    PY: '🇵🇾 Paraguay',
    PE: '🇵🇪 Peru',
    PH: '🇵🇭 Philippines',
    PN: '🇵🇳 Pitcairn Islands',
    PL: '🇵🇱 Poland',
    PT: '🇵🇹 Portugal',
    PR: '🇵🇷 Puerto Rico',
    QA: '🇶🇦 Qatar',
    RE: '🇷🇪 Réunion',
    RO: '🇷🇴 Romania',
    RU: '🇷🇺 Russia',
    RW: '🇷🇼 Rwanda',
    SH: '🇱🇸 Saint Helena',
    KN: '🇰🇳 Saint Kitts and Nevis',
    PM: '🇵🇲 Saint Pierre and Miquelon',
    VC: '🇻🇨 Saint Vincent and the Grenadines',
    WS: '🇼🇸 Samoa',
    SM: '🇸🇲 San Marino',
    ST: '🇲🇱 São Tomé and Príncipe',
    SA: '🇸🇦 Saudi Arabia',
    SN: '🇸🇳 Senegal',
    RS: '🇷🇸 Serbia',
    SC: '🇲🇸 Seychelles',
    SL: '🇸🇱 Sierra Leone',
    SG: '🇸🇬 Singapore',
    SX: '🇸🇽 Sint Maarten',
    SK: '🇸🇰 Slovakia',
    SI: '🇸🇮 Slovenia',
    SB: '🇸🇧 Solomon Islands',
    SO: '🇲🇽 Somalia',
    ZA: '🇿🇦 South Africa',
    SS: '🇸🇸 South Sudan',
    ES: '🇪🇸 Spain',
    SD: '🇸🇩 Sudan',
    SR: '🇱🇰 Suriname',
    SJ: '🇯🇲 Svalbard and Jan Mayen',
    SE: '🇸🇪 Sweden',
    CH: '🇨🇭 Switzerland',
    SY: '🇸🇾 Syria',
    TW: '🇹🇼 Taiwan',
    TJ: '🇹🇯 Tajikistan',
    TZ: '🇹🇿 Tanzania',
    TH: '🇹🇭 Thailand',
    TL: '🇹🇱 Timor-Leste',
    TG: '🇹🇬 Togo',
    TK: '🇹🇰 Tokelau',
    TO: '🇹🇴 Tonga',
    TT: '🇹🇹 Trinidad and Tobago',
    TV: '🇹🇻 Tuvalu',
    UG: '🇺🇬 Uganda',
    UA: '🇺🇦 Ukraine',
    AE: '🇦🇪 United Arab Emirates',
    GB: '🇬🇧 United Kingdom',
    US: '🇺🇸 United States',
    UY: '🇺🇾 Uruguay',
    UZ: '🇺🇿 Uzbekistan',
    VU: '🇻🇺 Vanuatu',
    VA: '🇻🇦 Vatican City',
    VE: '🇻🇪 Venezuela',
    VN: '🇻🇳 Vietnam',
    WF: '🇼🇫 Wallis and Futuna',
    EH: '🇪🇭 Western Sahara',
    YE: '🇾🇪 Yemen',
    ZM: '🇿🇲 Zambia',
    ZW: '🇿🇼 Zimbabwe'
  };
  

const SnakeGame = () => {
  const [gridSize, setGridSize] = useState(20);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15, type: 'NORMAL', flag: FLAGS.US });
  const [powerUp, setPowerUp] = useState(null);
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [difficulty, setDifficulty] = useState('MEDIUM');
  const [activePowerUp, setActivePowerUp] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const storedHighScore = localStorage.getItem('snakeHighScore');
    if (storedHighScore) setHighScore(parseInt(storedHighScore, 10));
    const storedLeaderboard = localStorage.getItem('snakeLeaderboard');
    if (storedLeaderboard) setLeaderboard(JSON.parse(storedLeaderboard));
  }, []);

  const moveSnake = useCallback(() => {
    if (gameOver || !isPlaying) return;

    setSnake((prevSnake) => {
      const newSnake = [...prevSnake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case 'UP':
          head.y = (head.y - 1 + gridSize) % gridSize;
          break;
        case 'DOWN':
          head.y = (head.y + 1) % gridSize;
          break;
        case 'LEFT':
          head.x = (head.x - 1 + gridSize) % gridSize;
          break;
        case 'RIGHT':
          head.x = (head.x + 1) % gridSize;
          break;
      }

      newSnake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        setScore((prevScore) => prevScore + FOOD_TYPES[food.type].points);
        setFood(generateFood(newSnake));
        // console.log('Eat sound effect');
      } else {
        newSnake.pop();
      }

      if (powerUp && head.x === powerUp.x && head.y === powerUp.y) {
        activatePowerUp(powerUp.type);
        setPowerUp(null);
      }

      return newSnake;
    });
  }, [direction, food, gameOver, isPlaying, gridSize, powerUp]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isPlaying) return;
      
      switch (e.key) {
        case 'ArrowUp':
          setDirection((prev) => prev !== 'DOWN' ? 'UP' : prev);
          break;
        case 'ArrowDown':
          setDirection((prev) => prev !== 'UP' ? 'DOWN' : prev);
          break;
        case 'ArrowLeft':
          setDirection((prev) => prev !== 'RIGHT' ? 'LEFT' : prev);
          break;
        case 'ArrowRight':
          setDirection((prev) => prev !== 'LEFT' ? 'RIGHT' : prev);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isPlaying]);

  useEffect(() => {
    const gameLoop = setInterval(moveSnake, activePowerUp === 'SPEED' ? SPEED_LEVELS[difficulty] / 2 : SPEED_LEVELS[difficulty]);

    return () => clearInterval(gameLoop);
  }, [moveSnake, difficulty, activePowerUp]);

  useEffect(() => {
    checkCollision();
  }, [snake]);

  const generateFood = useCallback((currentSnake) => {
    const newFood = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
      type: Math.random() < 0.7 ? 'NORMAL' : (Math.random() < 0.9 ? 'BONUS' : 'SUPER'),
      flag: Object.values(FLAGS)[Math.floor(Math.random() * Object.values(FLAGS).length)],
    };
    if (currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
      return generateFood(currentSnake);
    }
    return newFood;
  }, [gridSize]);

  const generatePowerUp = useCallback(() => {
    const types = Object.keys(POWER_UPS);
    const type = types[Math.floor(Math.random() * types.length)];
    return {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
      type,
    };
  }, [gridSize]);

  const activatePowerUp = useCallback((type) => {
    setActivePowerUp(type);
    if (type === 'SHRINK') {
      setSnake(prevSnake => prevSnake.slice(0, Math.max(3, prevSnake.length - 3)));
    }
    setTimeout(() => {
      setActivePowerUp(null);
    }, POWER_UPS[type].duration);
  }, []);

  const checkCollision = useCallback(() => {
    const head = snake[0];
    if (snake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)) {
      setGameOver(true);
      setIsPlaying(false);
      // console.log('Game over sound effect');
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('snakeHighScore', score.toString());
      }
      updateLeaderboard();
    }
  }, [snake, score, highScore]);

  const updateLeaderboard = useCallback(() => {
    const newLeaderboard = [...leaderboard, { score, date: new Date().toLocaleDateString() }]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    setLeaderboard(newLeaderboard);
    localStorage.setItem('snakeLeaderboard', JSON.stringify(newLeaderboard));
  }, [leaderboard, score]);

  const resetGame = useCallback(() => {
    setSnake([{ x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2) }]);
    setFood(generateFood([{ x: Math.floor(gridSize / 2), y: Math.floor(gridSize / 2) }]));
    setPowerUp(null);
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setIsPlaying(true);
    setActivePowerUp(null);
  }, [gridSize, generateFood]);

  const startGame = useCallback(() => {
    resetGame();
    setIsPlaying(true);
  }, [resetGame]);

  useEffect(() => {
    if (isPlaying && !powerUp && Math.random() < 0.01) {
      setPowerUp(generatePowerUp());
    }
  }, [isPlaying, powerUp, generatePowerUp]);

  const gameBoard = useMemo(() => (
    <div
      className="relative bg-white border border-gray-300"
      style={{ width: gridSize * CELL_SIZE, height: gridSize * CELL_SIZE }}
    >
      {snake.map((segment, index) => (
        <div
          key={index}
          className="absolute bg-green-500"
          style={{
            left: segment.x * CELL_SIZE,
            top: segment.y * CELL_SIZE,
            width: CELL_SIZE,
            height: CELL_SIZE,
          }}
        />
      ))}
      <div
        className={`absolute ${FOOD_TYPES[food.type].color}`}
        style={{
          left: food.x * CELL_SIZE,
          top: food.y * CELL_SIZE,
          width: CELL_SIZE,
          height: CELL_SIZE,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: `${CELL_SIZE}px`, // Adjust font size to fit the cell
        }}
      >
        {food.flag}
      </div>
      {powerUp && (
        <div
          className={`absolute ${POWER_UPS[powerUp.type].color} transition-all duration-100 ease-linear`}
          style={{
            left: powerUp.x * CELL_SIZE,
            top: powerUp.y * CELL_SIZE,
            width: CELL_SIZE,
            height: CELL_SIZE,
          }}
        />
      )}
    </div>
  ), [snake, food, powerUp, gridSize]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Snake Game</h1>
      {!isPlaying && !gameOver && (
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Start Game</h2>
          <div className="mb-2">
            <label className="mr-2">Grid Size:</label>
            <input
              type="number"
              value={gridSize}
              onChange={(e) => setGridSize(Math.max(10, Math.min(50, parseInt(e.target.value, 10))))}
              className="border p-1"
            />
          </div>
          <div className="mb-2">
            <label className="mr-2">Difficulty:</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="border p-1"
            >
              <option value="EASY">Easy</option>
              <option value="MEDIUM">Medium</option>
              <option value="HARD">Hard</option>
            </select>
          </div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={startGame}
          >
            Start Game
          </button>
        </div>
      )}
      {isPlaying && (
        <>
          <div className="mb-4">
            <span className="mr-4">Score: {score}</span>
            <span>High Score: {highScore}</span>
          </div>
          {activePowerUp && (
            <div className="mb-2">
              Active Power-up: {POWER_UPS[activePowerUp].effect}
            </div>
          )}
          {gameBoard}
        </>
      )}
      {gameOver && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Game Over!</h2>
          <p className="mb-2">Your Score: {score}</p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
            onClick={resetGame}
          >
            Play Again
          </button>
          <h3 className="text-xl font-bold mb-2">Leaderboard</h3>
          <ul>
            {leaderboard.map((entry, index) => (
              <li key={index}>
                {index + 1}. Score: {entry.score} - Date: {entry.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
