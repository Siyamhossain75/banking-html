document.getElementById('submit-buttton').addEventListener('click',function(){
    //email
   const emailInput= document.getElementById('user-email')
   const email = emailInput.value;
   console.log(email);
   
   //password
   const password = document.getElementById('user-password').value;
   
   if (email !== "admin@gmail.com" && password !== "01836933874" ) {
       alert("wrong passwornd and username")
       return
   }
   if (email == "admin@gmail.com" && password == "01836933874" ) {
     window.location.href = ".banking.html";
   }
})