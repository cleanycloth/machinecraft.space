function fulldate() {
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var theday  = new Date();
	document.getElementById('fdate').innerHTML = theday.toLocaleDateString("en-US", options);
}
function startTime() {
	fulldate();
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// This code is not mine. You can find the source for the clock here:
// https://stackoverflow.com/questions/23877917/displaying-a-javascript-clock-in-html