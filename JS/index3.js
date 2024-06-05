



let urlParams = new URLSearchParams(window.location.search);//קוד שמעביר את שם המשתמש 
let userName = urlParams.get("userName");

console.log(userName);

document.querySelector("#logogame1").addEventListener("click",()=>{
    let name=userName;
    window.location.href="../Html/index2.html?userName=" + name;
})
document.querySelector("#startButton2").addEventListener("click",()=>{
    let name=userName;
        window.location.href="../Html/index4.html?userName=" + name;
    })