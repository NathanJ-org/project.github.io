function cclick() {
    let input = document.querySelector("input").value;
    var d = input;
    d = ' ' + d
    var m = d.replace(/ /g, "👏")
    document.querySelector("span").textContent = m;
}