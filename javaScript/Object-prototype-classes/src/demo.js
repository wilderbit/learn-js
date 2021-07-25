'use strict'; 
(function() {
    let date = new Date();
    let date1 = new Date('2050-03-25T13:01:30Z')
    let date2 = new Date(2050, 3, 25, 13, 1, 30, 50)

    display(date.toString())
    display(date.getFullYear())
    display(date.getMonth()) // Zero Based
    display(date.getDate())
    display(date.getDay())
    display(date.getHours())
    display(date.getMinutes())
    display(date.getSeconds())
    display(date.getMilliseconds())

    display(date.toString())
    display(date.getUTCFullYear())
    display(date.getUTCMonth()) // Zero Based
    display(date.getUTCDate())
    display(date.getUTCDay())
    display(date.getUTCHours())
    display(date.getUTCMinutes())
    display(date.getUTCSeconds())
    display(date.getUTCMilliseconds())

    let date3 = date2 - date1; // Return Number of millis
    display(date3)

})();
