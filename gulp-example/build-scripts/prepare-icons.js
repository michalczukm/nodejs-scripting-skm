const fs = require('fs');
const path = require('path');

const sizes = [ 
    { x:128, y:128 },
    { x:144, y:144 },
    { x: 192, y: 192 }
];

const logoPath = path.resolve(__dirname, './../assets/logo.png');
const distPath = path.resolve(__dirname, './../dist');

if(!fs.access(distPath)) {
    fs.mkdir(distPath);
}

sizes.forEach(size =>
    fs.createReadStream(logoPath)
        .pipe(fs.createWriteStream(path.resolve(distPath, `logo-${size.x}x${size.y}.png`)))
);