let main = document.querySelector(".main"); //התחלה
let container = document.querySelector(".container"); //טופס הרשמה
let login = document.querySelector(".login"); //טופס כניסה לקיים
let submit = document.querySelector("#submit"); //כפטור הרשמה
document.querySelector("#start").addEventListener("click", function () {
  main.style.display = "none";
  container.style.display = "none";
  login.style.display = "block";

     document.querySelector("#login-submit").addEventListener("click", function () {  //שלא רשום
      container.style.display = "block";
      login.style.display = "none";

      const inputname = document.querySelector("#name"); //שם
      let name = inputname.value.trim();

      const inputemail = document.querySelector("#email"); //מייל שהזין
      let email = inputemail.value.trim();

      const inputpassword = document.querySelector("#password"); //סיסמא שהזין
      let password = inputpassword.value.trim();
 const personGame = {  //ביצוע שמירה בספריה
            name: name,
            email: email,
            password: password,
          }
         localStorage.setItem(name, JSON.stringify(personGame)); 

      document.querySelector("#submit").addEventListener("click", function() { //לחיצה על שליחה לא רשום
        const inputname = document.querySelector("#name").value;
        const inputemail = document.querySelector("#email").value;
        const inputpassword = document.querySelector("#password").value;
       if(inputname&&inputemail&&inputpassword){
        alert("הטופס נשלח בהצלחה בואו נשחק");
          window.location.href = "./index2.html";
       }else{ 
        alert(" אנא מלאו את השדות הנדרשים");
       }
      });
    });

  document.querySelector("#login-open").addEventListener("click", function () {//כניסת לקוח רשום למערכת ובדיקה אם קיים כבר
    //כאשר נרשם
    const loginName = document.querySelector("#login-name").value.trim();

     const loginPassword = document.querySelector("#login-password").value.trim();
    if (loginName && loginPassword) {
      const storedUser = localStorage.getItem(loginName);
      if (storedUser) {
        const user = JSON.parse(storedUser);

        if (user.password === loginPassword) {
          alert("התחברת בהצלחה!");
          window.location.href = "./index2.html";
        } else {
          alert("סיסמא שגויה");
        }
      } else {
        alert("משתמש לא נמצא");
      }
    } else {
      alert("אנא מלא את כל השדות");
    }
  });
});
