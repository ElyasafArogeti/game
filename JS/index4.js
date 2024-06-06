let submitStart = document.querySelector("#Instructions");
let StartGame = document.querySelector("#game");

document.querySelector("#staet").addEventListener("click", function () {
    startGame();
});

function startGame() {
    submitStart.style.display = "none";
    StartGame.style.display = "grid";
    let arrbox = document.querySelectorAll(".box");
    let random = Math.floor(Math.random() * 9);
    console.log(random);
    let borandom = document.createElement("img");
    borandom.src = "../מצא את המטמון.png";
    borandom.style.width = "110px";
    borandom.style.height = "100px";
    borandom.style.display = "none";
    arrbox[random].append(borandom);

    console.log(random);
    let isGameOver = false;
    let attempts = 0;

    arrbox.forEach((box, index) => {
        box.style.backgroundColor = ""; // איפוס צבע הרקע
        box.style.pointerEvents = "auto"; // איפוס אפשרות הלחיצה

        box.addEventListener("click", function handleClick() {
            if (isGameOver) return; // אם המשחק נגמר, לא לעשות כלום
            attempts++;
            if (index === random) {
                borandom.style.display = "block";
                document.getElementById("result").innerText = "ניצחון 🏆:מצאת את המטמון";

                document.querySelector("#result").style.display = "block";
                isGameOver = true; // סימון שהמשחק נגמר
                document.querySelector("#reset").style.display = "flex"; // הצגת כפתור שחק שוב

                document.querySelector("#reset").addEventListener("click", resetGame);
            } else {
                box.style.backgroundColor = "lightblue"; // הוספת צבע כחול לריבוע רגיל
                box.style.pointerEvents = "none"; // כדי למנוע לחיצה נוספת על הריבוע הנוכחי
            }

            if (attempts >= 4 && !isGameOver) {
                document.getElementById("result").innerText = "הפסדת 😢 : נגמרו הנסיונות";
                document.querySelector("#result").style.display = "block";
                document.querySelector("#reset").style.display = "flex"; // הצגת כפתור שחק שוב
                isGameOver = true; // סימון שהמשחק נגמר
                document.querySelector("#reset").addEventListener("click", resetGame);
            }
        });
    });
}

function resetGame() {
    document.querySelector("#result").style.display = "none";
    document.querySelector("#reset").style.display = "none";
    let arrbox = document.querySelectorAll(".box");

    arrbox.forEach(box => {
        box.innerHTML = ""; // לנקות את תוכן הריבועים
    });

    startGame(); // להתחיל את המשחק מחדש
}
