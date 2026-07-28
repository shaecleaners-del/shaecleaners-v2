/* ==========================================
   Shae Cleaners v2
   app.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ACTIVE MENU
    ========================= */

    const current = location.pathname.split("/").pop();

    document.querySelectorAll(".bottom-nav a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === current || (current === "" && href === "index.html")) {
            link.classList.add("active");
        }

    });

    /* =========================
       FADE IN ANIMATION
    ========================= */

    const items = document.querySelectorAll(
        ".hero,.slider,.menu-grid,.promo,.fitur,.testimoni"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {
        threshold: 0.15
    });

    items.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition = ".6s";

        observer.observe(item);

    });

});


/* ==========================================
   AUTO SLIDER
========================================== */

const slider = document.querySelector(".slides");

if (slider) {

    let index = 0;

    setInterval(() => {

        index++;

        if (index >= slider.children.length) {
            index = 0;
        }

        slider.scrollTo({

            left: slider.clientWidth * index,
            behavior: "smooth"

        });

    }, 3500);

}


/* ==========================================
   TOAST
========================================== */

function showToast(text){

    const toast = document.createElement("div");

    toast.innerText = text;

    toast.style.position="fixed";
    toast.style.bottom="100px";
    toast.style.left="50%";
    toast.style.transform="translateX(-50%)";
    toast.style.background="#1185ff";
    toast.style.color="#fff";
    toast.style.padding="12px 18px";
    toast.style.borderRadius="30px";
    toast.style.boxShadow="0 10px 30px rgba(0,0,0,.2)";
    toast.style.zIndex="99999";
    toast.style.fontSize="14px";

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.remove();

    },2500);

}


/* ==========================================
   SCROLL TO TOP
========================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";
topBtn.style.bottom="90px";
topBtn.style.right="20px";
topBtn.style.width="48px";
topBtn.style.height="48px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#1185ff";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.display="none";
topBtn.style.cursor="pointer";
topBtn.style.boxShadow="0 10px 25px rgba(0,0,0,.2)";
topBtn.style.zIndex="999";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};


/* ==========================================
   SPLASH SCREEN
========================================== */

window.addEventListener("load",()=>{

    const splash=document.getElementById("splash");

    if(splash){

        setTimeout(()=>{

            splash.style.opacity="0";

            setTimeout(()=>{

                splash.remove();

            },500);

        },1000);

    }

});


/* ==========================================
   SERVICE WORKER
========================================== */

if("serviceWorker" in navigator){

    window.addEventListener("load",()=>{

        navigator.serviceWorker.register("sw.js");

    });

}