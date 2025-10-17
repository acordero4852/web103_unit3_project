const formatTime = async (time) => {
    let hours = Math.floor(time / 100);
    let minutes = time % 100;
    let period = 'AM';

    if (hours >= 12) {
        period = 'PM';
        if (hours > 12) {
            hours -= 12;
        }
    } else if (hours === 0) {
        hours = 12;
    }

    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${minutes} ${period}`;
}

const formatRemainingTime = async (remaining) => {
    let parts = [];
    
    if (remaining.years && remaining.years > 0) {
        parts.push(`${remaining.years} year${remaining.years > 1 ? 's' : ''}`);
    }
    if (remaining.months && remaining.months > 0) {
        parts.push(`${remaining.months} month${remaining.months > 1 ? 's' : ''}`);
    }
    if (remaining.days && remaining.days > 0) {
        parts.push(`${remaining.days} day${remaining.days > 1 ? 's' : ''}`);
    }
    
    if (parts.length === 0) {
        return 'Event has passed';
    }
    return `Time remaining: ${parts.join(', ')}`;
}

const formatNegativeTimeRemaining = async (remaining, id) => {
    if (remaining === 'Event has passed') {
        const element = document.getElementById(`remaining-${id}`);
        if (element) {
            element.style.backgroundColor = 'red';
            element.style.color = 'white';
            element.style.fontWeight = 'bold';
            element.style.padding = '2px 4px';
            element.innerHTML = '<i class="fa-regular fa-calendar-xmark fa-shake"></i> Event has passed';
        }
    }
}

export default {
    formatTime,
    formatRemainingTime,
    formatNegativeTimeRemaining
}
