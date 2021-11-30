const aboutBtn = document.getElementById("about")
const aboutSide = document.getElementById("about-side")
const resumeBtn = document.getElementById("resume")
const resumeSide = document.getElementById("resume-side")
const workBtn = document.getElementById("work")
const blogBtn = document.getElementById("blog")
const contactBtn = document.getElementById("contact")

window.onload = (event) => {
    aboutSide.style.display = 'flex'
    resumeSide.style.display = "none"
};

aboutBtn.onclick = () => {
    aboutSide.style.display = 'flex'
    resumeSide.style.display = "none"
}
resumeBtn.onclick = () => {
    aboutSide.style.display = 'none'
    resumeSide.style.display = "flex"
}