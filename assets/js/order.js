/* ==========================================
   Shae Cleaners v2
   order.js
========================================== */

const layanan = document.getElementById("layanan");
const qty = document.getElementById("qty");

const hargaText = document.getElementById("harga");
const totalText = document.getElementById("total");
const invoiceText = document.getElementById("invoice");

const btnWA = document.getElementById("btnWA");

const nama = document.getElementById("nama");
const hp = document.getElementById("hp");
const alamat = document.getElementById("alamat");
const tanggal = document.getElementById("tanggal");
const jam = document.getElementById("jam");

/* =============================
   FORMAT RUPIAH
============================= */

function rupiah(angka){

    return new Intl.NumberFormat("id-ID",{

        style:"currency",
        currency:"IDR",
        minimumFractionDigits:0

    }).format(angka);

}

/* =============================
   NOMOR INVOICE
============================= */

function generateInvoice(){

    const now=new Date();

    const y=now.getFullYear();

    const m=String(now.getMonth()+1).padStart(2,"0");

    const d=String(now.getDate()).padStart(2,"0");

    const random=Math.floor(Math.random()*900)+100;

    return `INV-${y}${m}${d}-${random}`;

}

invoiceText.innerText=generateInvoice();

/* =============================
   HITUNG TOTAL
============================= */

function hitungTotal(){

    if(layanan.value===""){

        hargaText.innerText=rupiah(0);
        totalText.innerText=rupiah(0);

        return;

    }

    const data=layanan.value.split("|");

    const harga=parseInt(data[1]);

    const jumlah=parseInt(qty.value)||1;

    hargaText.innerText=rupiah(harga);

    totalText.innerText=rupiah(harga*jumlah);

}

layanan.addEventListener("change",hitungTotal);

qty.addEventListener("input",hitungTotal);

hitungTotal();

/* =============================
   WHATSAPP
============================= */

btnWA.addEventListener("click", () => {

    if (
        nama.value === "" ||
        hp.value === "" ||
        alamat.value === "" ||
        layanan.value === ""
    ) {
        alert("Mohon lengkapi data terlebih dahulu.");
        return;
    }

    const data = layanan.value.split("|");

    const layananNama = data[0];
    const harga = parseInt(data[1]);
    const jumlah = parseInt(qty.value) || 1;
    const total = harga * jumlah;

    const orderData = {

        invoice: invoiceText.innerText,

        nama: nama.value,

        hp: hp.value,

        alamat: alamat.value,

        layanan: layananNama,

        qty: jumlah,

        harga: harga,

        total: total,

        tanggal: tanggal.value,

        jam: jam.value,

        status: "Menunggu"

    };

    // Simpan order terakhir
    localStorage.setItem(
        "orderData",
        JSON.stringify(orderData)
    );

    // Simpan riwayat order
    let orders =
        JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(orderData);

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

    const nomorAdmin = "6283813138221";

    const pesan = `Halo Shae Cleaners.

Invoice : ${orderData.invoice}

Nama : ${orderData.nama}

WhatsApp : ${orderData.hp}

Alamat : ${orderData.alamat}

Layanan : ${orderData.layanan}

Jumlah : ${orderData.qty}

Tanggal : ${orderData.tanggal}

Jam : ${orderData.jam}

Total : ${rupiah(orderData.total)}

Terima kasih.`;

    window.open(
        `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`,
        "_blank"
    );

    setTimeout(() => {

        window.location.href = "invoice.html";

    }, 500);
});
{
invoice:invoice,

nama:nama,

hp:hp,

alamat:alamat,

layanan:layanan,

qty:qty,

harga:harga,

total:total,

tanggal:tanggal,

jam:jam,

status:"Menunggu"

}

);
const promo =
localStorage.getItem("promoAktif");


if(promo){

// ambil diskon dari Firebase

// kurangi total pembayaran

}