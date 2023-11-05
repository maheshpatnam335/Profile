
function formatDate(date) {
    let d = new Date(date);
    let hh = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let dd = "AM";
    let h = hh;
    if (h >= 12) {
	    h = hh - 12;
	    dd = "PM";
    }
    if (h == 0) {
	    h = 12;
    }
    m = m < 10 ? "0" + m : m;

    s = s < 10 ? "0" + s : s;

    // if you want 2 digit hours:
    h = h < 10 ? "0" + h : h;
    let year1 = d.getFullYear();
    //if you want month and date in 2 digits
    let date1 = d.getDate();
    let month1 = d.getMonth() + 1;
    if (date1 < 10) {
	    date1 = '0' + date1;
    }
    if (month1 < 10) {
	    month1 = '0' + month1;
    }
    let dateFormat = month1 + "-" + date1 + "-" + year1;
    let pattern = "  " + h + ":" + m + ":" + s + " " + dd;

    return dateFormat + pattern;
}


export default function AmPmFormat(dateInMilliSeconds) {
    let localDateInMilliSeconds = dateInMilliSeconds - (new Date().getTimezoneOffset() * 60 * 1000);
    return formatDate(localDateInMilliSeconds);
}
