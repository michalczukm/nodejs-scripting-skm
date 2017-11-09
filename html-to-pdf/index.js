/**
 * @example
 * node html-to-pdf.js "<p>Test!</p>" > test_1.pdf
 */

const pdf = require('html-pdf');
const process = require('process');

const args = process.argv.slice(2);
let [html] = args;

const options = {
    format: 'A4'
};

pdf.create(html, options)
    .toStream((err, res) => !err ? res.pipe(process.stdout) : process.stderr.write(`Failed: ${err}`));