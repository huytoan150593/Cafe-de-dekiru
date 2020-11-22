

document.addEventListener("DOMContentLoaded", function() {
    const h = document.querySelector(".hours");
    const m = document.querySelector(".minutes");
    const s = document.querySelector(".seconds");
    
    const c = function() {
        var a = new Date();
        h.innerHTML = set(a.getHours()) + ":";
        m.innerHTML = set(a.getMinutes()) + ":";
        s.innerHTML = set(a.getSeconds());
        
        function set(x) {
            if(x < 10) return "0" + x;
            return x;
        }
    }
    setInterval(c, 1000);

})