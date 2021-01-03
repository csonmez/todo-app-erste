const Bundler = require('parcel-bundler');
const path = require('path');
const fs = require('fs');

module.exports = async function (ctx) {
    if (!ctx.opts.options) {
        return;
    }

    const bundler = new Bundler(path.join(__dirname, '../src/index.html'), {
        outDir: './www',
        watch: false,
        cache: false,
        sourceMaps: false
    });
    await bundler.bundle();

    const content = fs.readFileSync('./config.xml', 'utf8').replace(/<content.*/, `<content src="index.html" />`);
    fs.writeFileSync('./config.xml', content);

}
