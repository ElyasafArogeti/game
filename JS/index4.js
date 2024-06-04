// const board = document.getElementById('game-board');
// const scoreDisplay = document.getElementById('score');
// const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
// let flippedCards = [];
// let matchedCards = [];
// let score = 0;

// // Shuffle the cards
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }

// function createBoard() {
//     const shuffledCards = shuffle(cards);
//     shuffledCards.forEach(card => {
//         const cardElement = document.createElement('div');
//         cardElement.classList.add('card');
//         cardElement.dataset.card = card;
//         cardElement.addEventListener('click', flipCard);
//         board.appendChild(cardElement);
//     });
// }

// function flipCard() {
//     if (flippedCards.length < 2 && !this.classList.contains('flip') && !matchedCards.includes(this)) {
//         this.classList.add('flip');
//         this.textContent = this.dataset.card;
//         flippedCards.push(this);

//         if (flippedCards.length === 2) {
//             setTimeout(checkForMatch, 1000);
//         }
//     }
// }

// function checkForMatch() {
//     const [card1, card2] = flippedCards;
//     if (card1.dataset.card === card2.dataset.card) {
//         matchedCards.push(card1, card2);
//         updateScore(10); // Add points for a match
//     } else {
//         card1.classList.remove('flip');
//         card1.textContent = '';
//         card2.classList.remove('flip');
//         card2.textContent = '';
//         updateScore(-5); // Subtract points for a mismatch
//     }
//     flippedCards = [];
// }

// function updateScore(points) {
//     score += points;
//     scoreDisplay.textContent = 'Score: ' + score;
// }

// createBoard();
let submitStart = document.querySelector("#Instructions");//
let StartGame = document.querySelector("#game");//



document.querySelector("#staet").addEventListener("click", function () {
    submitStart.style.display="none";
    StartGame.style.display="grid";
    let arrbox = document.querySelectorAll(".box");
    let random = Math.floor(Math.random() * 9);
    let borandom =document.createElement("img");
    borandom.src = "../מטמון.jpg";
    borandom.style.width="140px";
    borandom.style.height="140px";
    borandom.style.display="none";
    arrbox[random].append( borandom);

   
    console.log(random);
    let isGameOver = false;

    arrbox.forEach((box, index) => {
      box.addEventListener("click", function () {
        if (isGameOver) return; // אם המשחק נגמר, לא לעשות כלום
        if (index === random) {
          borandom.style.display="block";
          document.getElementById("result").innerText="ניצחון 🏆 : מצאת את המטמון";
          document.querySelector("#result").style.display="block";
         
          isGameOver = true; // סימון שהמשחק נגמר
          document.querySelector("#reset").style.display="flex";//הצגת כפטור שחק שוב
          
       document.querySelector("#reset").addEventListener("click",()=>{location.reload();});
        } else {
          box.style.backgroundColor="lightblue";// הוספת צבע כחול לריבוע רגיל
          box.style.pointerEvents = "none"; // כדי למנוע לחיצה נוספת על הריבוע הנוכחי
        }
      });
    });
  });
  