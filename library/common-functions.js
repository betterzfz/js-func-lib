/**
 * a frequently used javascript functions library
 * @stone
 */

/**
 * a separated countdown function
 * @param countdown_time the seconds to countdown
 * @param second_id the id of the seconds element for countdown
 * @param minute_id the id of ths minutes element for countdown
 * @param hour_id the id of the hours element for countdown
 * @param day_id the id of the days element for countdown
 * @stone
 */
const separated_countdown = (countdown_time, second_id, minute_id, hour_id, day_id) => {
    return setInterval(() => {
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

/**
 * a joined countdown function
 * @param countdown_time the seconds to countdown
 * @param countdown_id the id of the element for countdown
 * @param language the language for countdown to show
 * @stone
 */
const joined_countdown = (countdown_time, countdown_id, language) => {
    return setInterval(() => {
        if (countdown_time > 0) {
            const days = Math.floor(countdown_time / 86400);
            const hours = Math.floor(countdown_time / 3600 - days * 24);
            const minutes = Math.floor(countdown_time / 60 - days * 1440 - hours * 60);
            const seconds = Math.floor(countdown_time) - days * 86400 - hours * 3600 - minutes * 60;

            let day_label = ':';
            let hour_label = ':';
            let minute_label = ':';
            let second_label = '';
            switch (language) {
                case 'en':
                    day_label = 'days';
                    hour_label = 'hours';
                    minute_label = 'minutes';
                    second_label = 'seconds';
                    break;
                case 'zh-cn':
                    day_label = '天';
                    hour_label = '时';
                    minute_label = '分';
                    second_label = '秒';
                    break;
            }

            let countdown_info = '';
            if (days > 0) {
                countdown_info += days + day_label;
            }
            if (hours > 0) {
                countdown_info += hours + hour_label;
            }
            if (minutes > 0) {
                countdown_info += minutes + minute_label;
            }
            if (seconds > 0) {
                countdown_info += seconds + second_label;
            }
            document.getElementById(countdown_id).innerHTML = countdown_info;

            countdown_time--;
        }
    }, 1000);
}