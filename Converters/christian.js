function cclick() {
    let input = document.querySelector("input").value;
    var a = input.replace(/fuck/g, "frick")
    var c = a.replace(/Fuck/g, "Frick")
    var i = c.replace(/FUCK/g, "FRICK")
    var b = i.replace(/Shit/g, "Poop")
    var e = b.replace(/shit/g, "poop")
    var k = e.replace(/SHIT/g, "POOP")
    var t = k.replace(/bitch/g, "butt")
    var q = t.replace(/Bitch/g, "Butt")
    var u = q.replace(/BITCH/g, "BUTT")
    var o = u.replace(/dick/g, "jerk")
    var x = o.replace(/Dick/g, "Jerk")
    var y = x.replace(/DICK/g, "JERK")
    var v = y.replace(/damn/g, "dang")
    var g = v.replace(/Damn/g, "Dang")
    var p = g.replace(/DAMN/g, "DANG")
    document.querySelector("span").textContent = p;
}
//note: no feelings were hurt within the making of this
//and if a word is vulgar in any part of the word it was added