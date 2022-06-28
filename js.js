
        var midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        var now = new Date();
        var msToMidnight = midnight - now;
        var cookieExists = document.cookie.match(/^(.*;)?\s*expireCookie\s*=\s*[^;]+(.*)?$/);

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

        function checkCookie() {
            if (!cookieExists) {
                console.log('ne postoji');
                createCookie("expireCookie", "value", 1);
            }
        }

        function setCookieMidnight() {
            if (cookieExists) {
                createCookie("expireCookie", "value", 1);
            }
        }
        var myTimeout = setTimeout(setCookieMidnight, msToMidnight);

        // Click event trigger new cookie
        document.addEventListener('click', function (e) {
            createCookie("expireCookie", "value", 1);
        });

        checkCookie();