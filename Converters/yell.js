function cclick() {
    let input = document.querySelector("input").value;
    let loud = input.toUpperCase();
    document.querySelector("span").textContent = loud;
}