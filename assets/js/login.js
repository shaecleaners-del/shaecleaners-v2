import {

signInWithEmailAndPassword

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {

auth

} from "./firebase.js";

const btn=document.getElementById("btnLogin");

btn.onclick=()=>{

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)

.then(()=>{

window.location.href="admin.html";

})

.catch((err)=>{

document.getElementById("info").innerHTML=

err.message;

});

};