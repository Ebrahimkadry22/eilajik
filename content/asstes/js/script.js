const bar= document.getElementById("navbar"),
conNavbar= document.getElementById("conNavbar"),
close= document.getElementById("closebar"),
navbarmobile = document.getElementById("navbarmobile");

bar.addEventListener("click",()=> {
navbarmobile.classList.toggle("active")
bar.style.display="none"
close.style.display="block"
})
close.addEventListener("click",()=> {
navbarmobile.classList.remove("active")
bar.style.display="block"
close.style.display="none"
})

// scroll window
window.onscroll = ()=> {
  if(window.scrollY >= 70 ) {
    conNavbar.classList.add("navbar-fixed")
  }else {
    conNavbar.classList.remove("navbar-fixed")
    
  }
}

const login = document.getElementById("login"),
closeForm=document.getElementById('closeForm'),
btnSginUp = document.getElementById("btnSginUp"),
btnSginIn = document.getElementById("btnSginIn"),
sginUpForm = document.getElementById("sginUpForm"),
sginInForm = document.getElementById("sginInForm"),
createAccount=document.getElementById("createAccount"),
haveAccount=document.getElementById("haveAccount");

btnSginIn.addEventListener("click",()=> {
  login.style.display='block'
  sginInForm.classList.add("active")
  sginUpForm.classList.remove("active")
  document.body.style.overflow = 'hidden';
  navbarmobile.classList.remove("active")
  close.style.display="none"
})
btnSginUp.addEventListener("click",()=> {
  login.style.display='block'
  sginInForm.classList.remove("active")
  sginUpForm.classList.add("active")
  document.body.style.overflow = 'hidden';
  navbarmobile.classList.remove("active")
  close.style.display="none"
})
createAccount.addEventListener('click',()=> {
  sginInForm.classList.remove("active")
  sginUpForm.classList.add("active")
})
haveAccount.addEventListener("click",()=>{
  sginInForm.classList.add("active")
  sginUpForm.classList.remove("active")
})
closeForm.addEventListener("click",()=> {
  login.style.display="none"
  document.body.style.overflow = 'auto';
  bar.style.display="block"
})