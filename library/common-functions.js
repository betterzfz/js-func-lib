/**
 * a frequently used javascript functions library
 * @stone
 */

/**
 * a countdown function
 * @param countdown_time the seconds to countdown
 * @param second_id the id of seconds element for countdown
 * @param minute_id the id of minutes element for countdown
 * @param hour_id the id of hours element for countdown
 * @param day_id the id of days element for countdown
 * @stone
 */
function countdown (countdown_time, second_id, minute_id, hour_id, day_id) {
    return setInterval(function () {
        if (countdown_time > 0) {
            const days = Math.floor(countdown_time / 86400);
            const hours = Math.floor(countdown_time / 3600 - days * 24);
            const minutes = Math.floor(countdown_time / 60 - days * 1440 - hours * 60);
            if (second_id) {
                document.getElementById(second_id).innerHTML = Math.floor(countdown_time) - days * 86400 - hours * 3600 - minutes * 60;
            }
            if (minute_id) {
                document.getElementById(minute_id).innerHTML = minutes;
            }
            if (hour_id) {
                document.getElementById(hour_id).innerHTML = hours;
            }
            if (day_id) {
                document.getElementById(day_id).innerHTML = days;
            }
            countdown_time--;
        }
    }, 1000);
}