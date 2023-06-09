// ALTERNAR BANNER

let saferERP = document.getElementById("saferERP")
saferERP.addEventListener("click", changeSaferCurrent);
let saferProducao = document.getElementById("safer-producao")
saferProducao.addEventListener("click", changeSaferCurrent);
let saferTransporte = document.getElementById("safer-transporte")
saferTransporte.addEventListener("click", changeSaferCurrent);
let saferHelpdesk = document.getElementById("safer-helpdesk")
saferHelpdesk.addEventListener("click", changeSaferCurrent);
let saferManager = document.getElementById("safer-manager")
saferManager.addEventListener("click", changeSaferCurrent);

let bannerHTML = document.getElementsByClassName("banner")

function changeSaferCurrent(ev) {
    let currentSafer = ev.currentTarget

    if(currentSafer.id == "saferERP") {
        removeClassSafers()
        saferERP.classList.add("saferERP-lineBottom")
        bannerImg("url(./img/banners/SaferERP-banner.png)")
    } else if (currentSafer.id == "safer-producao") {
        removeClassSafers()
        saferProducao.classList.add("saferProducao-lineBottom")
        bannerImg("url(./img/banners/SaferProdução-banner.png)")
    } else if (currentSafer.id == "safer-transporte"){
        removeClassSafers()
        saferTransporte.classList.add("saferTransporte-lineBottom") 
        bannerImg("url(./img/banners/SaferTransporte-banner.png)")
    } else if (currentSafer.id == "safer-helpdesk") {
        removeClassSafers()
        saferHelpdesk.classList.add("saferHelpdesk-lineBottom")
        bannerImg("url(./img/banners/SaferHelpdesk-banner.png)")
    } else if (currentSafer.id == "safer-manager") {
        removeClassSafers()
        saferManager.classList.add("saferManager-lineBottom")
        bannerImg("url(./img/banners/SaferManager-banner.png)")
    }

    function removeClassSafers() {
        saferERP.classList.remove("saferERP-lineBottom")
        saferProducao.classList.remove("saferProducao-lineBottom")
        saferTransporte.classList.remove("saferTransporte-lineBottom")
        saferHelpdesk.classList.remove("saferHelpdesk-lineBottom")
        saferManager.classList.remove("saferManager-lineBottom")
    }

    function bannerImg (tag) {
        bannerHTML[0].style.background = tag
        bannerHTML[0].style.backgroundRepeat = "no-repeat"
        bannerHTML[0].style.backgroundSize = "cover"
        bannerHTML[0].style.backgroundPosition = "center"
    }
}
