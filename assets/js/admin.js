/* ==========================================
   Shae Cleaners v2
   admin.js
========================================== */
import {

onAuthStateChanged

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {

auth

} from "./firebase.js";

onAuthStateChanged(auth,(user)=>{

if(!user){

window.location.href="login.html";

}

});

const table = document.getElementById("orderTable");
const totalOrder = document.getElementById("totalOrder");
const todayOrder = document.getElementById("todayOrder");
const income = document.getElementById("income");

/* ==========================
   FORMAT RUPIAH
========================== */

function rupiah(nominal){
    return new Intl.NumberFormat("id-ID",{
        style:"currency",
        currency:"IDR",
        minimumFractionDigits:0
    }).format(nominal);
}

/* ==========================
   AMBIL DATA
========================== */

let orders = JSON.parse(localStorage.getItem("orders")) || [];

render();

/* ==========================
   TAMPILKAN DATA
========================== */

function render(){

    table.innerHTML="";

    let totalPendapatan=0;

    let hariIni=0;

    const today=new Date().toISOString().slice(0,10);

    orders.forEach((item,index)=>{

        totalPendapatan+=item.total;

        if(item.tanggal===today){
            hariIni++;
        }

        table.innerHTML +=`

        <tr>

        <td>${item.invoice}</td>

        <td>${item.nama}</td>

        <td>${item.layanan}</td>

        <td>${rupiah(item.total)}</td>

        <td>
        <select onchange="ubahStatus(${index},this.value)">
            <option ${item.status=="Menunggu"?"selected":""}>Menunggu</option>
            <option ${item.status=="Diproses"?"selected":""}>Diproses</option>
            <option ${item.status=="Selesai"?"selected":""}>Selesai</option>
        </select>
        </td>
     let selesai = 0;
let diproses = 0;

orders.forEach(item=>{

    if(item.status==="Selesai"){
        selesai++;
    }

    if(item.status==="Diproses"){
        diproses++;
    }

});

document.getElementById("customerCount").innerText =
new Set(orders.map(o=>o.hp)).size;

document.getElementById("doneOrder").innerText =
selesai;

document.getElementById("processOrder").innerText =
diproses;
        <td>
        <button onclick="detailOrder(${index})">
        Detail
        </button>
        <button onclick="hapusOrder(${index})">
        Hapus
        </button>
        </td>
        </tr>
        `;

    });

    totalOrder.innerText=orders.length;

    todayOrder.innerText=hariIni;

    income.innerText=rupiah(totalPendapatan);

}

/* ==========================
   STATUS
========================== */

function ubahStatus(index,status){

    orders[index].status=status;

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

}

/* ==========================
   HAPUS
========================== */

function hapusOrder(index){

    if(confirm("Hapus pesanan ini?")){

        orders.splice(index,1);

        localStorage.setItem(
            "orders",
            JSON.stringify(orders)
        );

        render();

    }

}

/* ==========================
   DETAIL
========================== */

function detailOrder(index){

    const d=orders[index];

    alert(

`Invoice : ${d.invoice}

Nama : ${d.nama}

WhatsApp : ${d.hp}

Alamat : ${d.alamat}

Layanan : ${d.layanan}

Jumlah : ${d.qty}

Total : ${rupiah(d.total)}

Status : ${d.status}`

    );

}
import {

collection,

onSnapshot

} from "firebase/firestore";

onSnapshot(

collection(db,"orders"),

(snapshot)=>{

// render tabel

});
import {

signOut

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

document.getElementById("logout").onclick=()=>{

signOut(auth).then(()=>{

window.location.href="login.html";

});

};