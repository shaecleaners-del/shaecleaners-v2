import {

collection,
getDocs

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


import {

db

} from "./firebase.js";



const promoList =
document.getElementById("promoList");



async function loadPromo(){


const snapshot =
await getDocs(
collection(db,"promo")
);



promoList.innerHTML="";



if(snapshot.empty){

promoList.innerHTML=

`
<p>
Belum ada promo aktif.
</p>
`;

return;

}



snapshot.forEach(doc=>{


const promo =
doc.data();



promoList.innerHTML += `


<div class="promo-card">


<h3>
${promo.nama}
</h3>


<div class="discount">

${promo.diskon}%

</div>


<p>

Minimal transaksi:
Rp ${Number(promo.minimal)
.toLocaleString("id-ID")}

</p>


<p>

Berlaku:
${promo.mulai}
s/d
${promo.selesai}

</p>



<button

class="btn-klaim"

onclick="klaimPromo('${doc.id}')">

Klaim Promo

</button>



</div>


`;



});


}



window.klaimPromo=function(id){


localStorage.setItem(
"promoAktif",
id
);


alert(
"Promo berhasil diklaim"
);


};



loadPromo();