let submit=document.getElementById("submit")

let name=document.getElementById("name")
let email=document.getElementById("email")
let password=document.getElementById("password")

submit.addEventListener("click",()=>{

    if(email.value== localStorage.getItem('email'))
    {
        alert("user already exsit");
    }
    else
    {

   
    if(name.value && email.value && password.value )
    {
        // localStorage.setItem('name', name.value);
        // localStorage.setItem('email', email.value);
        // localStorage.setItem('password', password.value);
        
 //store as a  array of object

 let users= JSON.parse(localStorage.getItem("users"))    || [];

 let new_user= {

    name:name.value,
    email:email.value,
    password:password.value
 }

 users.push(new_user);

  localStorage.setItem("users",JSON.stringify(users))







        alert('Data saved to local storage!');
        window.location.href = './signin.html';
    }
    else
    {
        alert("pls fill all the details");


    }
}
})


console.log(localStorage);