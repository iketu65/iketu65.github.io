function askMyName() {
   const name = prompt("Please enter your name", "Enter your name here.");

   if (name != null) {
      document.getElementById("myName").innerHTML = "My name is " + name;
   }
}

function helloWorld() {
   const h1message = document.getElementById("myName").innerHTML;
   alert(h1message + ' "เลิกกับพี่ ได้ดีทุกคน"');
}

function calAge() {
   const yearOfBirth = Number(prompt("Please enter your year of birth in A.D."));
   
   if (isNaN(yearOfBirth)||(yearOfBirth==0)||(yearOfBirth==1)||(yearOfBirth>2022)) {
      alert("Please enter your year of birth in A.D.");
   } else {
      const age = 2022 - yearOfBirth;
      alert(`ยินดีด้วย นายอยู่ในประเทศนี้มา ${age} ปีแล้ว`);
   }
}

function loadProfile() {
   const name = "Phakorn"; //prompt("Please enter your name.");
   const province = "Krung Thep Maha Nakhon"; //prompt("Please enter your province.");

   document.getElementById("my-name").innerHTML = `${name}`;
   document.getElementById("my-province").innerHTML = `${province}`;
}