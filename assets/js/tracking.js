import {
collection,
query,
where,
getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { db } from "./firebase.js";

const btn = document.getElementById("btnCari");

btn.addEventListener("click", async () => {

const invoice = document
.getElementById("invoiceInput")
.value
.trim();

if(invoice===""){

alert("Masukkan nomor invoice.");

return;

}

const q=query(

collection(db,"orders"),

where("invoice","==",invoice)

);

const snap=await getDocs(q);

if(snap.empty){

alert("Invoice tidak ditemukan.");

return;

}

const data=snap.docs[0].data();

document.getElementById("hasil").style.display="block";

document.getElementById("inv").innerText=data.invoice;

document.getElementById("nama").innerText=data.nama;

document.getElementById("layanan").innerText=data.layanan;

document.getElementById("tanggal").innerText=data.tanggal;

document.getElementById("total").innerText=
new Intl.NumberFormat("id-ID",{
style:"currency",
currency:"IDR"
}).format(data.total);

document.getElementById("status").innerText=data.status;

let persen=20;

switch(data.status){

case "Menunggu":
persen=20;
break;

case "Diproses":
persen=40;
break;

case "Dalam Perjalanan":
persen=60;
break;

case "Sedang Dikerjakan":
persen=80;
break;

case "Selesai":
persen=100;
break;

}

document.getElementById("progressBar").style.width=persen+"%";

});