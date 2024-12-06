let  submit=document.getElementById('submit')
let email=document.getElementById("email")
let password=document.getElementById("password")




submit.addEventListener('click',()=>{

    // console.log( email.value);
    // console.log(localStorage.getItem('email'))
    // if(  email.value==localStorage.getItem('email') &&  password.value==localStorage.getItem('password'))

    let users=   JSON.parse(localStorage.getItem("users")) || []

    let userFound = false;
    
    for( let i=0;i<users.length;i++)
    { 
         if(users[i].email ==email.value)
        {
            userFound=true;
            if(users[i].password==password.value)
            {
                   alert("user successfully logged in");
                  window.location.href='./home.html'
                  break;
            }
            else
            {
                alert('invalid credentail');
                break;
            }
           
        }
        else
        {
            continue;
        }
    }
    if(userFound==false)
    {
        alert("user not exist kindly register ");
        window.location.href("./signup.html");
    }
})

