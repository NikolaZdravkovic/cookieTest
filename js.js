
var midnight = new Date();
midnight.setHours(24, 0, 0, 0);
var now = new Date();
var msToMidnight = midnight - now;
var cookieExists = document.cookie.match(/^(.*;)?\s*expireCookie\s*=\s*[^;]+(.*)?$/);
var cookieName = document.cookie;
var cookieString = cookieName.substring(cookieName.indexOf('=') + 1);;


var randomNum;
var cookie = true;

console.log(cookieString)

function createCookie(name, value, minutes) {
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}
function greet() {
    cookie = false;
}
function setStorage() {
    sessionStorage.setItem('key', randomNum);
    let data = sessionStorage.getItem('key');
    console.log(data);
}
function setStorageExpire(){
    sessionStorage.removeItem('key');
}

function checkCookie() {
    randomNum = Math.floor(Math.random() * 100000) + 1;

    if (sessionStorage.getItem('key') === null) {
        setStorage();
        var timeOutSession = setTimeout(setStorageExpire, 30000);

    }
    if (!cookieExists) {
        // randomNum = Math.floor(Math.random() * 100000) + 1;
        console.log('ne postoji');
        createCookie("expireCookie", randomNum, 0.5);
    }
}

function setCookieMidnight() {
    if (cookieExists) {
        createCookie("expireCookie", randomNum, 0.5);
    }
}
var timeOutMid = setTimeout(setCookieMidnight, msToMidnight);


// Click event trigger new cookie
document.addEventListener('click', function (e) {

    if (sessionStorage.getItem('key') === null) {
        console.log('problem')
        randomNum = Math.floor(Math.random() * 100000) + 1;
        setStorage();
        createCookie("expireCookie", randomNum, 0.5);
    }
 
    if (cookie === false) {
        cookie = true;
        randomNum = Math.floor(Math.random() * 100000) + 1;
        setStorage();
        createCookie("expireCookie", randomNum, 0.5);

    } else {
        console.log(cookie);
        setTimeout(greet, 30000);
        // randomNum = sessionStorage.getItem('key');
        createCookie("expireCookie", randomNum, 0.5);
    }

});
checkCookie();
