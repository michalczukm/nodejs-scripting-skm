const pdf = require('html-pdf');
const process = require('process');

module.exports = (html) => {
    const options = {
        format: 'A4'
    };
    
    return new Promise((resolve, reject) => {
        pdf.create(html, options)
        .toStream((err, res) => !err ? resolve(res) : reject(err))
    });
};