/* Rename this file to jetanim.js when uploading to your website! */
function jetanim(id = "mylogo", dt = 5000) {
    /* Created with JETA.COM Animated Logo Wizard: https://jeta.com/js-animated-logo.php */
    window.addEventListener("load", function () {
        var logo = document.getElementById(id), style = document.createElement("style"); style.type = "text/css";
        style.innerHTML = "@keyframes jetakey{50%,from,to{opacity:1}25%,75%{opacity:0}}.jetanim{animation-name:jetakey;animation-duration:1s;animation-fill-mode:both;z-index:1000}";
        document.head.appendChild(style); set();
        function set() { logo.classList.remove("jetanim"); setTimeout(function () { logo.classList.add("jetanim"); }, 100); }
        var move = 0; logo.addEventListener("mouseover", function () { if (move == 0) { move = 1; set(); setTimeout(function () { move = 0; }, 1500); } });
        var time, timer; rtime();["mousedown", "mousemove", "keypress", "scroll", "touchstart"].forEach(function (n) { document.addEventListener(n, rtime, true); });
        function rtime(g) { (g === 1) ? time += time : time = dt; clearTimeout(timer); timer = setTimeout(function () { set(); rtime(1); }, time); }
    });
} jetanim();
