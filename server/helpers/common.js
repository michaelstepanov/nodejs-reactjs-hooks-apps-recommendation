const queryString = require('query-string');

exports.dateToAge = dateStr => {
    const date = new Date(dateStr);
    const ageDiffMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDiffMs); // Miliseconds from epoch

    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

exports.stringifyQueryString = values => queryString.stringify(values, {arrayFormat: 'bracket'});

exports.wait = ms => new Promise(res => setTimeout(res, ms));

exports.isValidDate = (dateString) => {
    const regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)) return false;  // Invalid format
    const d = new Date(dateString);
    const dNum = d.getTime();
    if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0,10) === dateString;
};

exports.start = () => {
    const start = new Date();

    return () => (new Date()) - start
};
