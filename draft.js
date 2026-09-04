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