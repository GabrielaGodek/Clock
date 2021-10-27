function showTime() {
    let date = new Date();
    let hr = date.getHours(); // 0 - 23
    let min = date.getMinutes(); // 0- 59
    let sec = date.getSeconds(); // 0-59


    if (hr == 0) {
        hr = 12;
    }

    hr = (hr < 10) ? "0" + hr : hr
    min = (min < 10) ? "0" + min : min
    sec = (sec < 10) ? "0" + sec : sec

    // let time = h + ":" + m + ":" + s
    // let currentDate = day+" "+month

    // time
    document.querySelector(".hr").innerText = hr;
    document.querySelector(".min").innerText = min;
    document.querySelector(".sec").innerText = sec;
    setTimeout(showTime, 1000)
    
}
function showDate(){
    let date = new Date();
    let day = date.getDate() // 1 - 31
    let month = date.getMonth() +1 ; // 0 -11
    let year = date.getFullYear() 
    // date
        document.querySelector(".day").innerText = day;
        document.querySelector(".month").innerText = month;
        document.querySelector(".year").innerText = year
} 
showTime();
showDate();

