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
            document.getElementById('line13').innerHTML = ""
            document.getElementById('line14').innerHTML = ""
            setTimeout(function() {
                document.getElementById('line5').innerHTML = "Pri Master: 3.60     ST3207410A"
            },3700);
            setTimeout(function() {
            document.getElementById('line6').innerHTML = "Pri Slave: NAR61590 Maxtor 6E020L0"
            },3800);
            setTimeout(function() {
            document.getElementById('line7').innerHTML = "Sec Master: NYK3     SONY CD-RW CRX320E"
            },3900);
            setTimeout(function() {
            document.getElementById('line8').innerHTML = "Sec Slave: JL10     HL-DT-ST DVDRAM GSA-H10N"
            },4000);
            setTimeout(function() {
            window.location.href = "/boot/blink";
            },4900)
        };
    });
    },1000);
 
}
            
setTimeout(function() {
    document.getElementById('line1').innerHTML = "AMIBIOS (C)1996 American Megatrends Inc.,"
    document.getElementById('line2').innerHTML = "A615601 V2.0 121498"
    document.getElementById('line3').innerHTML = "Pentium II - 400MHz"
    document.getElementById('line4').innerHTML = "Checking NVRAM.."
    document.getElementById('line13').innerHTML = "(C) American Megatrends Inc.,"
    document.getElementById('line14').innerHTML = "61-1214-001169-00111111-071595-440BX-1440B000-H"
    document.getElementById("amilogo").style.display = "inline";
    animateValue();
}, 7000);
