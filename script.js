const aboutBtn = document.getElementById("about")
const aboutSide = document.getElementById("about-side")
const resumeBtn = document.getElementById("resume")
const resumeSide = document.getElementById("resume-side")
const workBtn = document.getElementById("work")
const workSide = document.getElementById("work-side")
const blogBtn = document.getElementById("blog")
const blogSide = document.getElementById("blog-side")
const contactBtn = document.getElementById("contact")

window.onload = (event) => {
    aboutSide.style.display = 'none'
    workSide.style.display = "none"
    resumeSide.style.display = "none"
    blogSide.style.display = 'flex'
};

aboutBtn.onclick = () => {
    cleanActiveClass()
    aboutBtn.classList.add("active")
    aboutSide.style.display = 'flex'
    resumeSide.style.display = "none"
    workSide.style.display = "none"
    blogSide.style.display = 'none'
}
resumeBtn.onclick = () => {
    cleanActiveClass()
    resumeBtn.classList.add("active")
    aboutSide.style.display = 'none'
    resumeSide.style.display = "flex"
    workSide.style.display = "none"
    blogSide.style.display = 'none'
}
workBtn.onclick = () => {
    cleanActiveClass()
    workBtn.classList.add("active")
    aboutSide.style.display = 'none'
    resumeSide.style.display = "none"
    workSide.style.display = "flex"
    blogSide.style.display = 'none'

}
blogBtn.onclick = () => {
    cleanActiveClass()
    blogBtn.classList.add("active")
    blogSide.style.display = 'flex'
    aboutSide.style.display = 'none'
    resumeSide.style.display = "none"
    workSide.style.display = "none"
}

function cleanActiveClass() {
    let allMenuBtn = document.querySelectorAll(".nav-container a")
    allMenuBtn.forEach(el => {
        el.classList.remove("active")
    })
}