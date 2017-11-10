const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');
const paths = require('./paths');

const sizes = [ 
    { x:128, y:128 },
    { x:144, y:144 },
    { x:192, y:192 }
];

const logoPath = path.resolve(__dirname, './../assets/logo.png');

fs.ensureDir(paths.dist)
    .then(() => 
        sizes.forEach(size =>
            sharp(logoPath)
                .resize(size.x, size.y)
                .toFile(path.resolve(paths.dist, `logo-${size.x}x${size.y}.png`))
        )
    )
    .then(() => console.log('great success!'))
    .catch((error) => console.error(`ups: ${error}`));
