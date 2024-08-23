var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");



function opentab(tabName) {
    for (item of tablinks) {
        item.classList.remove("active-link")
    }
    for (item of tabcontents) {
        item.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

function openMenu() {
    document.getElementById("sideMenu").style.right = "0";
}
function closeMenu() {
    document.getElementById("sideMenu").style.right = "-200px";
}