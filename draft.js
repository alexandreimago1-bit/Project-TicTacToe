// gameboard function

const Gameboard = (() => {

  
const board = Array.from({ length: 9 }, () => "");
  
  const getBoard = () => board
  
 const placeMark = (index, marker) => {
   if (board[index] === ""){
     board[index] = marker;
   }
 }
  
  return {
     getBoard, placeMark
  };
})();


function Player(name, marker){
  return { name, marker }
}

const GameController = (() => {
  const player1 = Player("Player 1", "X");
  const player2 = Player("Player 2", "O");
  let currentPlayer = player1;

  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const getActivePlayer = () => currentPlayer;

  const playRound = (index) => {
    Gameboard.placeMark(index, currentPlayer.marker)
    console.log(Gameboard.getBoard());
    if (checkWinner()){
      console.log(`${currentPlayer.name} wins!`);
    }
    switchPlayer();
  }

  return { playRound, getActivePlayer }
})();

// CHECK WINNER FUNCTION

const checkWinner = (()=> {
  const winningCombinations = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [2,4,6],[0,4,8]
  ];
  const board = Gameboard.getBoard();

  for (const combo of winningCombinations){
    const [a,b,c] = combo
    if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]){
      console.log(`The Winner is ${board[a]}`)
      return true
    }
  }
  return false
})


