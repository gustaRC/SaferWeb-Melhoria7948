
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

let questionInput = document.getElementById("questionInput")

let h3_topic = document.getElementById("topic-h3-pageAjuda")

function changeSaferCurrent(ev) {
    let currentSafer = ev.currentTarget

    if(currentSafer.id == "saferERP") {
        removeClassSafers()
        questionInput.classList.add("saferERP-input")
        saferERP.classList.add("saferERP-lineBottom")
        h3_topic.classList.add("saferERP-h3")

    } else if (currentSafer.id == "safer-producao") {
        removeClassSafers()
        questionInput.classList.add("saferProducao-input")
        saferProducao.classList.add("saferProducao-lineBottom")
        h3_topic.classList.add("saferProducao-h3")
        
    } else if (currentSafer.id == "safer-transporte"){
        removeClassSafers()
        questionInput.classList.add("saferTransporte-input")
        saferTransporte.classList.add("saferTransporte-lineBottom") 
        h3_topic.classList.add("saferTransporte-h3")

    } else if (currentSafer.id == "safer-helpdesk") {
        removeClassSafers()
        questionInput.classList.add("saferHelpdesk-input")
        saferHelpdesk.classList.add("saferHelpdesk-lineBottom")
        h3_topic.classList.add("saferHelpdesk-h3")

    } else if (currentSafer.id == "safer-manager") {
        removeClassSafers()
        questionInput.classList.add("saferManager-input")
        saferManager.classList.add("saferManager-lineBottom")
        h3_topic.classList.add("saferManager-h3")
    }

    function removeClassSafers() {
        saferERP.classList.remove("saferERP-lineBottom")
        saferProducao.classList.remove("saferProducao-lineBottom")
        saferTransporte.classList.remove("saferTransporte-lineBottom")
        saferHelpdesk.classList.remove("saferHelpdesk-lineBottom")
        saferManager.classList.remove("saferManager-lineBottom")
        questionInput.classList.remove("saferERP-input", "saferProducao-input", "saferTransporte-input", "saferHelpdesk-input", "saferManager-input")
        h3_topic.classList.remove("saferERP-h3", "saferProducao-h3", "saferTransporte-h3", "saferHelpdesk-h3", "saferManager-h3")
    }
}
