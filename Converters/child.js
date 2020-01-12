function cclick() {
        let input = document.querySelector("input").value;
        let a = input.replace(/R/g, "W")
        let c = a.replace(/l/g, "w")
        let b = c.replace(/L/g, "W")
        let e = b.replace(/r/g, "w")        
        document.querySelector("span").textContent = e;
}

