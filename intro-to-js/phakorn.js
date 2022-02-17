function askMyName() {
    const name = prompt("Please enter your name", "Enter your name here.");
 
    if (name != null) {
       document.getElementById("myName").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("myName").innerHTML;
    alert(h1message + ' "เลิกกับพี่ ได้ดีทุกคน"')
 }