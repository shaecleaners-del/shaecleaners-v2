/* ==========================================
   Shae Cleaners v2
   invoice.js
========================================== */

const data = JSON.parse(localStorage.getItem("invoiceData"));

if (!data) {

    alert("Data invoice tidak ditemukan.");

    window.location.href = "order.html";

}

/* ==========================
   FORMAT RUPIAH
========================== */

function rupiah(angka){

    return new Intl.NumberFormat("id-ID",{

        style:"currency",
        currency:"IDR",
        minimumFractionDigits:0

    }).format(angka);

}

/* ==========================
   HEADER
========================== */

document.getElementById("inv").textContent = data.invoice;

document.getElementById("tgl").textContent = data.tanggal;

/* ==========================
   DATA PELANGGAN
========================== */

document.getElementById("nama").textContent =
"Nama : " + data.nama;

document.getElementById("hp").textContent =
"WhatsApp : " + data.hp;

document.getElementById("alamat").textContent =
"Alamat : " + data.alamat;

/* ==========================
   TABEL
========================== */

const tbody = document.getElementById("tbody");

tbody.innerHTML = `
<tr>

<td>${data.layanan}</td>

<td>${data.qty}</td>

<td>${rupiah(data.harga)}</td>

<td>${rupiah(data.total)}</td>

</tr>
`;

/* ==========================
   TOTAL
========================== */

document.getElementById("grandTotal").textContent =
rupiah(data.total);
const order = JSON.parse(
    localStorage.getItem("orderData")
);