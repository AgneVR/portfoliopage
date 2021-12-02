const tryDark = document.querySelector(".try-dark")
let allSideMenuBtn = document.querySelectorAll(".nav-container a")

let modal = document.querySelector(".modal")
let spanClose = document.querySelectorAll(".close")
spanClose.forEach(el => {
    el.onclick = () => {
        modal.style.display = "none"
    }
})

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function modalWorkCard() {
    let workCard = document.querySelectorAll(".work-card")
    let modal = document.querySelector(".modal")
    workCard.forEach(el => {
        el.onclick = () => {
            modal.style.display = "flex"
        }
    })
}

modalWorkCard()

tryDark.onclick = () => {
    let bodySelect = document.querySelector("body")
    bodySelect.classList.toggle("bgDark")
    darkCardBg()
    darkAtag()
    workCardBgChange()
    allAtagWhite()
    contactBlockTheme()
    darkGreyToLight()
    darkBtn()
    makeDarkInput()
    makeDarkTextArea()
    replaceOurClientsImg()
    replaceFooterImg()
    modalContentDark()
    modalBgDark()
}
function modalContentDark() {
    let modalContent = document.querySelectorAll(".modal-content")
    modalContent.forEach(el => {
        el.classList.toggle("bgDarkBlocks")
    })
}

function modalBgDark() {
    let modalBg = document.querySelectorAll(".modal")
    modalBg.forEach(el => {
        el.classList.toggle("bgDark")
    })
}

function darkCardBg() {
    let changeBg = document.querySelectorAll(".card-container")
    changeBg.forEach(el => {
        el.classList.toggle("bgDarkBlocks")
    })
}

function contactBlockTheme() {
    let darkTheme = document.querySelectorAll(".darkTheme")
    darkTheme.forEach(el => {
        el.classList.toggle("bgDarkBlocks")
    })
}

function allAtagWhite() {
    let aTag = document.querySelectorAll("a")
    aTag.forEach(el => {
        el.classList.toggle("whiteA")
    })
}

function darkGreyToLight() {
    let darkGrey = document.querySelectorAll(".dark-grey ")
    darkGrey.forEach(el => {
        el.classList.toggle("colorLight")
    })
}

function workCardBgChange() {
    let workCard = document.querySelectorAll(".work-card")
    workCard.forEach(el => {
        el.classList.toggle("bgDarkBlocks")
    })
}

function darkAtag() {
    let btnDark = document.querySelectorAll("a.darkBtn")
    btnDark.forEach(btn => {
        btn.classList.toggle("btnDarkBg")
    })
}

function darkBtn() {
    let buttonDark = document.querySelectorAll("button")
    buttonDark.forEach(el => {
        el.classList.toggle("btnDarkBgPink")
    })
}

function makeDarkInput() {
    let darktInp = document.querySelectorAll(".form-box form input")
    darktInp.forEach(el => {
        el.classList.toggle("darkInput")
    })
}

function makeDarkTextArea() {
    let darkText = document.querySelectorAll(".form-box form textarea")
    darkText.forEach(el => {
        el.classList.toggle("darkInput")
    })
}

function replaceOurClientsImg() {
    let ourClientsImg = document.querySelectorAll(".our-clients img")
    ourClientsImg.forEach(el => {
        if (el.src.match("https://inbio-react.netlify.app/static/f60ed605fd12e097aac6d9f93d7a2702/1e15b/brand-04.webp")) {
            el.src = "https://inbio-react.netlify.app/static/315fa9d000ebf4a2995d16d13b17852e/e94a9/client1.webp"
        } else {
            el.src = "https://inbio-react.netlify.app/static/f60ed605fd12e097aac6d9f93d7a2702/1e15b/brand-04.webp"
        }
    })
}

function replaceFooterImg() {
    let footerImg = document.querySelector("footer img")
    if (footerImg.src.match("https://inbio-react.netlify.app/static/ef90c7f423dc084c800a1dc506c57d25/b791a/logo-dark.webp")) {
        footerImg.src = "https://inbio-react.netlify.app/static/cbac6339da167a45b2deae57ed7b26cc/b791a/logo.webp"
    } else {
        footerImg.src = "https://inbio-react.netlify.app/static/ef90c7f423dc084c800a1dc506c57d25/b791a/logo-dark.webp"
    }
}


if (allSideMenuBtn.length > 0) {
    allSideMenuBtn.forEach(btn => {
        btn.onclick = () => {
            cleanActiveClass()
            hideAllBlocks()
            btn.classList.add("active")
            let dataBlockId = btn.getAttribute("data-blockId")
            document.getElementById(`${dataBlockId}`).classList.add("active")
        }
    })
}

function hideAllBlocks() {
    let allContentBlock = document.querySelectorAll(".blocks")
    allContentBlock.forEach(el => {
        el.classList.remove("active")
    })
}

function cleanActiveClass() {
    let allMenuBtn = document.querySelectorAll(".nav-container a")
    allMenuBtn.forEach(el => {
        el.classList.remove("active")
    })
}