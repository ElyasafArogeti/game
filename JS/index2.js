
let start = document.querySelector("#start");// מחזיק כפתור התחלה
let imges = document.querySelector(".img");// מיקום התמונה לפי סדר
let textNachsh = document.querySelector("#textNachsh");//טקסט אותיות ניחוש
let input = document.querySelector("#input");//הטקסט שמזין המשתמש
let submit = document.querySelector("#submit");//שליחה לפני ניחוש 
let message = document.querySelector("#arr");//הודעה עם טעה או צדק 
let timerElement = document.querySelector("#span");// אלמנט הזמן
let  Timeisup  =document.querySelector("#Timeisup");//הודעת ניגמר הזמן 
let nextlevel = document.querySelector("#next-level");//כפתור להמשיך במשחק
let score = 100; // ניקוד התחלתי
let  userScoreDiv = document.querySelector("#user-score");//ניקוד המשתמש
let userScore = parseInt(sessionStorage.getItem("userScore")) || 100;
userScoreDiv.innerText= `הניקוד שלך הוא: ${userScore}`;


const arr=["../תמונות לפני/הכותל המערבי.png","../תמונות לפני/ביבי לפני.png","../תמונות לפני/דובאי לפני.png","../תמונות לפני/אלון מאסק לפני.png","../תמונות לפני/גשר המיתרים לפני.png","../תמונות לפני/פסל החירות לפני.png","../תמונות אחרי/חיפה.webp","../תמונות אחרי/רוטשילד.jpeg","../תמונות לפני/הרב עובדיה לפני .png","../תמונות לפני/מגדל דוד לפני.png","../תמונות אחרי/רומא.jpg","../תמונות לפני/איתמר בן גביר לפני.png","../תמונות אחרי/תחנת הכוח בחדרה.jpg"];
const arrimgLeft=["../תמונות אחרי/הכותל המערבי.jpg","../תמונות אחרי/ביבי.jpg","../תמונות אחרי/דובאי.jpg","../תמונות אחרי/אלון מרסק.jpg","../תמונות אחרי/גשר המיתרים.jpg","../תמונות אחרי/פסל החירות.jpg","../תמונות אחרי/חיפה.webp","../תמונות אחרי/רוטשילד.jpeg","../תמונות אחרי/הרב עובדיה.jpg","../תמונות אחרי/מגדל דוד.jpg","../תמונות אחרי/רומא.jpg","../תמונות אחרי/איתמר בן גביר.webp","../תמונות אחרי/תחנת הכוח בחדרה.jpg"]
const arrname=["הכותל המערבי","בנימין נתניהו","דובאי","אלון מאסק","גשר המיתרים","פסל החירות","נמל חיפה","רוטשילד","הרב עובדיה יוסף","מגדל דוד","רומא","איתמר בן גביר","תחנת הכח חדרה"];
const arrNachsh=[`_ _ _ _ _ ה _ _ _ _ ה`,`_ מ _ _ _ _ _ _ ה _ _ _`,`_ _ ב _ _`,` _ ו _ _ _ ס_ _`,`_ _ _ ג _ _ _ _ _ ת`,` _ ל _ _ _ _ ו _ _`,`_ _ _ ח _ _ _`,`_ _ _ _ ט _ _`,`_ _ _ ע _ _ _ _ _ י _ _ _ `,`ג _ _ _ _ ד _`,`_ מ _ _`,`_ _ _ _ _ ב _ _ _ _ _`,`_ _ _ ח _ _ _ _ _ ח _`]

document.querySelector("#start").addEventListener("click",startGame);

let  ImageIndex = 0;

function startGame () {
   input.style.display="block";
   submit.style.display="block";
     start.style.display="none";

     showImage(ImageIndex);//הצגת תמונה לפי סדר 
    showtextNachsh(ImageIndex);//הצגת טקסט ניחוש
    startTimer();//הפעלת הטיימר


     function showImage(index) {//מעולה
      imges.innerHTML = "";       // לנקות את התמונות הקודמות
      let temp = document.createElement("img")//יצירת תמונה לסדר המערך
      temp.src = arr[index];
      temp.style.width = `350px`;
      temp.style.height = `250px`;
      temp.classList.add("border");
      imges.append(temp);
  }
  function showtextNachsh(index) { // טקסט אותיות ניחוש 
     textNachsh.innerText = arrNachsh[index];
     textNachsh.style.fontSize= `30px`;
  }

  submit.addEventListener("click", checkGuess);//לחיצה לאחר ניחוש

  function checkGuess() {
   let userGuess = input.value.trim();//הניחוש של הלקוח 
   nextlevel.style.display="none";
   Timeisup.style.display="none";
   if (check(userGuess, arrname[ImageIndex])){//אם התשובה נכונה 
       console.log("ניחוש נכון");
       clearInterval(timer);//עצירת השעון 
       let temp = document.createElement("img");//רוצה להעלות 4 שניות את התמונה המקורית ולהמשיך במשחק
       temp.src = arrimgLeft[ImageIndex];
       temp.style.width = "350px";
       temp.style.height = "250px";
       imges.innerHTML="";
       imges.append(temp);
        message.style.display="block";   // תשובה נכונה  
        message.innerText="  👍 תשובה נכונה : כל הכבוד - עוברים לשלב הבא 👍"
         message.classList.add(".textNachsh");// הוספת קלאס להודעה 
       
   let x=  setTimeout (()=> {
    nextlevel.style.display="none";
      Timeisup.style.display="none";
        message.style.display = "none";
        imges.innerHTML = "";
         ImageIndex++;
         startTimer()
 if (ImageIndex < arr.length && arr[ImageIndex]) {
           showImage(ImageIndex);
           showtextNachsh(ImageIndex);
           input.value = ""; // לנקות את השדה עבור הניחוש הבא
       } else {
        message.style.display="block";   // תשובה נכונה  
        message.innerText ="🎉✨ כל הכבוד סיימת את המשחק ✨🎉"
         message.classList.add(".textNachsh");// הוספת קלאס להודעה 
           start.style.display = "block";
           input.style.display = "none";
           submit.style.display = "none";
       }
    }, 5000);
   } else {//כאשר התשובה לא נכונה 
      message.style.display="block";
      message.innerText="😭 תשובה לא נכונה"
      message.classList.add(".textNachsh");
     setTimeout (()=>{
        message.style.display="none";
    }, 2000);
   }
}
}
function check(value1, value2) {
   return value1 === value2;
} 
let timer;
function startTimer() {     //פונקציית הטיימר 

    let timeLeft  = 60;
    timerElement.innerText = timeLeft;//תיימר התחלתי 
   timer = setInterval(()=>{
        timeLeft--;
        timerElement.innerText = timeLeft;//מוריד את טיימר המוצג
        if (timeLeft <= 0) {//כשהזמן ניגמר
            clearInterval(timer);//עצירת השעון 
            updateScore(-10); // יורדים 10 נקודות כאשר הזמן מסתיים
            score -= 10; // הפחת ניקוד
    
            sessionStorage.setItem("userScore", userScore);

            if (userScore < 20) { // אם הניקוד פחות מ-20
                start.style.display = "block";// החזרה לתחילת המשחק
                input.style.display = "none";
                submit.style.display = "none";
                alert("נגמר הזמן! הניקוד שלך נמוך מ-20. המשחק מתחיל מהתחלה.");
                userScore = 100; // איפוס הניקוד למצב ההתחלתי
                userScoreDiv.innerText = `הניקוד שלך הוא: ${userScore}`; // עדכון התצוגה של הניקוד
                return;

            } else { 
                nextlevel.style.display="block";
                Timeisup.style.display="block";

                submit.style.display="block";
                input.style.display="block";
                textNachsh.innerText = arrname[ImageIndex];
            }
        }
    }, 1000);
}
function updateScore(scoreChange) {
    userScore += scoreChange; // שינוי בניקוד
    sessionStorage.setItem("userScore", userScore); // שמירת הניקוד ב-sessionStorage
    userScoreDiv.innerText = `הניקוד שלך הוא: ${userScore}`; // עדכון התצוגה של הניקוד
}

