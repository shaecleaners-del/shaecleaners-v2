import {

collection,
addDoc,
getDocs,
deleteDoc,
doc

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


import {

db,
auth

} from "./firebase.js";


import {

onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";



const list =
document.getElementById("addressList");


const btn =
document.getElementById("btnSimpan");


let userID;



onAuthStateChanged(auth,(user)=>{


if(!user){

alert("Silahkan login");

return;

}


userID=user.uid;

loadAlamat();


});



btn.onclick=async()=>{


const judul =
document.getElementById("judul").value;


const alamat =
document.getElementById("alamat").value;



if(!judul || !alamat){

alert("Lengkapi alamat");

return;

}



await addDoc(

collection(db,"alamat"),

{

uid:userID,

judul:judul,

alamat:alamat,

utama:false

}

);



alert("Alamat tersimpan");


loadAlamat();


};



async function loadAlamat(){


const data =
await getDocs(
collection(db,"alamat")
);



list.innerHTML="";



data.forEach(item=>{


const a=item.data();



if(a.uid===userID){



list.innerHTML += `


<div class="address-card">


<h3>
${a.judul}
</h3>


<p>
${a.alamat}
</p>



<button onclick="pilihAlamat('${item.id}')">

Pilih Utama

</button>



<button class="delete"
onclick="hapusAlamat('${item.id}')">

Hapus

</button>


</div>


`;



}



});


}



window.hapusAlamat=async(id)=>{


await deleteDoc(
doc(db,"alamat",id)
);


loadAlamat();


};



window.pilihAlamat=function(id){


localStorage.setItem(
"alamatUtama",
id
);


alert(
"Alamat utama dipilih"
);


};