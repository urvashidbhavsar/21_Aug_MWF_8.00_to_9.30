// click on button(id) => togglebtn
// target => .nav class
function toggleMenubar() {
    let navbar = document.querySelector(".nav");
    navbar.classList.add("new-nav");
}
function CloseMenubar() {
    let navbar = document.querySelector(".nav");
    navbar.classList.remove("new-nav");
}