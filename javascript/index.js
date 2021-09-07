
/* */

function abrirModal(id) {
    document.getElementById(id).style.top = "0";
    document.getElementById(id).style.display = "block";
}

function fecharModal(id) {
    document.getElementById(id).style.top = "-100%";
    document.getElementById(id).style.display = "none";

}


/* 
            position: fixed;
            width: 100%;
            top: 0;*/


/* */

document.querySelector("#items").addEventListener("wheel", event => {
    if(event.daltaY > 0) {
        event.target.scrollBy(300, 0)
    } else {
        event.target.scrollBy(-300, 0)
    }
});


/* */


const nav = document.getElementsByTagName('nav')[0];
const topNav = nav.offsetTop;

window.onscroll = function(){
    fixarMenuNoTopo();
}

function fixarMenuNoTopo() {
    if (window.pageYOffset >= topNav) {
        nav.classList.add('FixoNoTopo')
    } else {
        nav.classList.remove('FixoNoTopo')
    }
}

