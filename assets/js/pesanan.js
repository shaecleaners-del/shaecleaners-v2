import {

collection,
query,
where,
onSnapshot

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


import {

db,
auth

} from "./firebase.js";


import {

onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";



const list =
document.getElementById("orderList");



onAuthStateChanged(auth,(user)=>{


if(!user){

list.innerHTML =
`
<p>
Silahkan login terlebih dahulu.
</p>
`;

return;

}



const q=query(

collection(db,"orders"),

where("uid","==",user.uid)

);



onSnapshot(q,(snapshot)=>{


list.innerHTML="";



if(snapshot.empty){

list.innerHTML=

`
<p>
Belum ada pesanan.
</p>
`;

return;

}



snapshot.forEach(doc=>{


const data=doc.data();



list.innerHTML += `

<div class="order-card">


<h3>
${data.invoice}
</h3>


<p>
Layanan :
${data.layanan}
</p>


<p>
Tanggal :
${data.tanggal}
</p>


<p>
Total :
Rp ${Number(data.total)
.toLocaleString("id-ID")}
</p>


<span class="order-status">

${data.status}

</span>



<div class="order-action">


<a href="tracking.html?invoice=${data.invoice}">

Tracking

</a>


<a href="order.html?service=${data.layanan}">

Pesan Lagi

</a>


</div>


</div>

`;


});


});


});
const orders =
JSON.parse(localStorage.getItem("orders")) || [];