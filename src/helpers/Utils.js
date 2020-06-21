import moment from "moment";

export const setColor = () => {
    return ['green', 'orange', 'blue', 'pink', 'yellow', 'red', 'purple', 'teal', 'tomato', 'violet', 'gold'];
};

export const isCurrentMonth = (date) => {
    const currentYear = moment().format('YYYY');
    const currentMonth = moment().format('MM');
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    return ((currentYear === year) && (currentMonth === month));
};

export const setLabelForMonth = () => {
    const daysInMonth = moment(moment().format('YYYY-MM')).daysInMonth();
    return  Array.from(Array(daysInMonth), (d, i) => i + 1);
};

export const currentDay = (date) => {
    return (parseInt(date.slice(8, 10))-1);
};
