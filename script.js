const tryDark = document.querySelector(".try-dark")
let allSideMenuBtn = document.querySelectorAll(".nav-container a")

tryDark.onclick = () => {
    let bodySelect = document.querySelector("body")
    bodySelect.classList.toggle("bgDark")
    darkCardBg()
    darkBtn()
    workCardBgChange()
    allAtagWhite()
}
function darkCardBg() {
    let changeBg = document.querySelectorAll(".card-container")
    changeBg.forEach(el => {
        el.classList.toggle("bgDarkBlocks")
    })
}

function allAtagWhite() {
    let aTag = document.querySelectorAll("a")
    aTag.forEach(el => {
        el.classList.toggle("whiteA")
    })
}

function workCardBgChange() {
    let workCard = document.querySelectorAll(".work-card")
    workCard.forEach(el => {
        el.classList.toggle("bgDarkBlocks")
    })
}

function darkBtn() {
    let btnDark = document.querySelectorAll(".btnDark")
    btnDark.forEach(btn => {
        btn.classList.toggle("btnDarkBg")
    })
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