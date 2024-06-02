//   let i=0;
//  let spon = document.querySelector("#span");
// setInterval(()=>{
//     while(i<25){
//  spon.textContent= `נותרו : ${i}`
//    i+1;
//     }console.log("yes")},1000);
const random = Math.floor(Math.random()*2);
// let alphabet = "abcdefghijklmnopqrstuvwxyz";   
// const randomAB = alphabet.charAt(Math.floor(Math.random()*alphabet.length));
console.log(random);
let start = document.querySelector("#start");// מחזיק כפתור התחלה
let imges = document.querySelector(".img");//מיקום התמונה 
let text = document.querySelector("#arr");//טקסט אותיות ניחוש
let input = document.querySelector("#input");//הטקסט שמזין המשתמש
let submit= document.querySelector("#submit");//שליחה לפני ניחוש 
// let a = document.createElement("img")
// a.src="../תמונות אחרי/אלון מרסק.jpg";
const arr = ["../תמונות לפני/הכותל המערבי.png","../תמונות אחרי/אלון מרסק.jpg"];
const arrname=["הכותל המערבי","אלון מאסק"];
document.querySelector("#start").addEventListener("click",f);
function f () {
   input.style.display="block";
   submit.style.display="block";
     start.style.display="none";

    for(let i=0; i < 2 ;i++){
   let temp = document.createElement("img");//יצירת תמונה לסדר המערך
   let textN = document.createElement("h2");//טקסט הניחוש
    textN.innerText = arrname[i];//שם התמונה לפי סדר
   temp.src = arr[i];//התמונות לפי סדר
   temp.style.width=`${400}px`;
   temp.style.height=`${300}px`;
   imges.append(temp); 
   // text.append(textN);
  document.querySelector("#submit").addEventListener("click",()=>{
     let t = input.value;
if(cc(t,arrname[i])){
         console.log("cccc");
      }else{
         console.log("novvv");
      }
    console.log(input);
    console.log(arrname[i]);
   if(input==arrname[i]){
      next=false;
      console.log("yes");
   }
   })
    }//for
}

function cc(value1,value2) {
   if (value1==value2) {
      return true;
   }else{
      return false;
   }
}




