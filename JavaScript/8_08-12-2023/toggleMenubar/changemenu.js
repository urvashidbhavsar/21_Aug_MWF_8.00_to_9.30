// target class = header
// perform = window 

let head_change = document.querySelector("header");
window.addEventListener("scroll", function () {
    let currentVal = this.window.scrollY;
    if (currentVal > 0) {
        head_change.classList.add("new-header")
    } else {
        head_change.classList.remove("new-header")
    }
})