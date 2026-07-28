/* ==========================================
   Shae Cleaners v2
   service.js
========================================== */


document.addEventListener("DOMContentLoaded",()=>{


    /*
       Ambil parameter layanan
       Contoh:
       order.html?service=sofa
    */

    const params = new URLSearchParams(
        window.location.search
    );


    const service = params.get("service");


    if(service){

        localStorage.setItem(
            "selectedService",
            service
        );

    }


    /*
       Tombol Pesan Sekarang
       pada halaman layanan
    */


    const btnOrder = document.querySelectorAll(
        ".btn-order"
    );


    btnOrder.forEach(btn=>{


        btn.addEventListener("click",()=>{


            const namaLayanan =
            document.querySelector("h1")
            ?.innerText;


            localStorage.setItem(
                "selectedService",
                namaLayanan
            );


        });


    });



});