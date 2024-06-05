let main = document.querySelector(".main"); //התחלה
let container = document.querySelector(".container"); //טופס הרשמה
let login = document.querySelector(".login"); //טופס כניסה לקיים
let submit = document.querySelector("#submit"); //כפטור הרשמה
let divalert = document.querySelector("#alert");

document.querySelector("#start").addEventListener("click", function () {
  
  main.style.display = "none";
  container.style.display = "none";
  login.style.display = "block";

     document.querySelector("#login-submit").addEventListener("click", function () {  //לחיצה על להירשם
      container.style.display = "block";
      login.style.display = "none";

      document.querySelector("#submit").addEventListener("click", function() { // לחיצה על שליחה אחרי הרישום   
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
       if(name && email && password){
          localStorage.setItem( name, JSON.stringify(personGame));
          divalert.style.display="block";
          divalert.style.color="yellow";
          divalert.innerHTML="טופס נשלח בהצלחה בואו נשחק";
          setTimeout (()=> {
            window.location.href="./Html/index3.html?userName=" + name;
       }, 2000);
       }else{ 
        divalert.innerHTML="אנא מלא את כל השדות";
        divalert.style.display="block";
      setTimeout (()=>{
        divalert.style.display="none";
    }, 2000);
       }
      });
    });

  document.querySelector("#login-open").addEventListener("click", function () {//כניסת לקוח רשום למערכת ובדיקה אם קיים כבר

    const loginName = document.querySelector("#login-name").value.trim();//ערך המשתמש

     const loginPassword = document.querySelector("#login-password").value.trim();//ערך הסיסמא 
     
    if (loginName && loginPassword) {
      const storedUser = localStorage.getItem(loginName);//לפי שם משתמש
      if (storedUser) { //אם קיים
        const user = JSON.parse(storedUser);//תביא את כל הנתונים שלו
        let nameuser =user.name; 
        if (user.password === loginPassword) {
          divalert.style.display="block";
           divalert.innerHTML = "התחברת בהצלחה בוא נשחק"; 
           divalert.style.color="yellow";
          setTimeout (()=> {
            window.location.href="./Html/index3.html?userName="+nameuser;
        }, 2000);
        } else {//משתמש קיים סיסמא שגוייה
          divalert.innerHTML = " הסיסמא שגוייה ";
          divalert.style.display="block";
      setTimeout (()=>{
        divalert.style.display="none";
    }, 2000);
        }
      } else {// שהמשתמש לא נימצא 
        divalert.innerHTML=" משתמש לא נימצא ";
        divalert.style.display="block";
      setTimeout (()=>{
        divalert.style.display="none";
    }, 2000);
      }
    } else { //לא ניכתב כלום 
        divalert.innerHTML="אנא מלא את כל השדות";
        divalert.style.display="block";
      setTimeout (()=>{
        divalert.style.display="none";
    }, 2000);
      
    }
  });
});
