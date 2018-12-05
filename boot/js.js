function animateValue() {
    document.getElementById('line5').innerHTML = "Hit DEL if you want to run SETUP"
    setTimeout(function(){
    var current = 0;
    var timer = setInterval(function() {
        current += 16;
        document.getElementById("value").innerHTML = current + "KB OK";
        if (current == 32768) {
            clearInterval(timer);
            document.getElementById('line5').innerHTML = "WAIT...";
            setTimeout(function() {
                document.getElementById('line5').innerHTML = "Pri Master: Seagate Barracuda 60G"
            },2000);
            setTimeout(function() {
            document.getElementById('line6').innerHTML = "Pri Slave: QUANTUM FIREBALL SE 2.5"
            },2100);
            setTimeout(function() {
            document.getElementById('line7').innerHTML = "Sec Master: SONY CD/DVD-ROM"
            },2200);
            setTimeout(function() {
            document.getElementById('line8').innerHTML = "Sec Slave: ASUS DRW-1814BL  1.13"
            },2300);
            setTimeout(function() {
            window.location.href = "/boot/blink";
            },4000)
        };
    });
    },1000);
 
}
            
setTimeout(function() {
    document.getElementById('line1').innerHTML = "AMIBIOS (C)1996 American Megatrends Inc.,"
    document.getElementById('line2').innerHTML = "A6117MS V2.0 070999"
    document.getElementById('line3').innerHTML = "Intel Pentium II - 400MHz"
    document.getElementById('line4').innerHTML = "Checking NVRAM..."
    document.getElementById('line13').innerHTML = "(C) American Megatrends Inc.,"
    document.getElementById('line14').innerHTML = "61-0208-001169-00111111-071595-440LX-1440L000-H"
    document.getElementById("amilogo").style.display = "inline";
    animateValue();
}, 2000);
