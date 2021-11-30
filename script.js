let allSideMenuBtn = document.querySelectorAll(".nav-container a")


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