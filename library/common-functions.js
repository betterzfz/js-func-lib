/**
 * a frequently used javascript functions library
 * @stone
 */

/**
 * a countdown function
 * @param countdown_time the seconds to countdown
 * @param day_id the id of days element for countdown
 * @param hour_id the id of hours element for countdown
 * @param minute_id the id of minutes element for countdown
 * @param second_id the id of seconds element for countdown
 * @stone
 */
const countdown = (countdown_time, day_id, hour_id, minute_id, second_id) => {
    return setInterval(countdown_time => {
        if (countdown_time > 0) {
            $('#' + day_id).text(Math.floor(countdown_time / 86400));
            $('#' + hour_id).text(Math.floor(countdown_time / 3600 - days * 24));
            $('#' + minute_id).text(Math.floor(countdown_time / 60 - days * 1440 - hours * 60));
            $('#' + second_id).text(Math.floor(countdown_time) - days * 86400 - hours * 3600 - minutes * 60);
        }
    }, 1000);
}