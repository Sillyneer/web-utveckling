let rubrik = document.getElementById("rubrik")

let rubrikÄndrad = false

function ÄndraRubrik() {
    if (
        rubrikÄndrad == false
    ) {
        rubrik.innerHTML = "sike, du är inte välkommen"
        rubrikÄndrad = true
    } else {
        rubrikÄndrad = "välkommen"
        rubrikÄndrad = false
    }

}

