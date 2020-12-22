const fs = require('fs');

const count = 100;

fs.readFile('templates/Component.tsx', 'utf8', function (readErr, template) {
    if (readErr) throw readErr;

    for (let i = 0; i < count; i++) {
        const content = template.replace(/__ID__/g, i);
        fs.writeFile(`src/components/Component${i}.tsx`, content, function (writeErr) {
            if (writeErr) throw writeErr;
        });
    }
});

fs.readFile('templates/Component.module.css', 'utf8', function (readErr, template) {
    if (readErr) throw readErr;

    for (let i = 0; i < count; i++) {
        const content = template.replace(/__ID__/g, i);
        fs.writeFile(`src/components/Component${i}.module.css`, content, function (writeErr) {
            if (writeErr) throw writeErr;
        });
    }
});

fs.readFile('templates/Component.test.tsx', 'utf8', function (readErr, template) {
    if (readErr) throw readErr;

    for (let i = 0; i < count; i++) {
        const content = template.replace(/__ID__/g, i);
        fs.writeFile(`src/components/Component${i}.test.tsx`, content, function (writeErr) {
            if (writeErr) throw writeErr;
        });
    }
});

const imports = [];
const usage = [];

for (let i = 0; i < count; i++) {
    imports.push(`import Component${i} from './components/Component${i}';`);
    usage.push(`<Component${i} />`);
}

fs.readFile('src/App.tsx', 'utf8', function (err, content) {
    if (err) throw err;

    let updatedContent = content.replace('// __COMPONENTS_IMPORTS__', imports.join('\n'));
    updatedContent = updatedContent.replace('{/* __COMPONENTS_USAGE__ */}', usage.join('\n'));

    fs.writeFile(`src/App.tsx`, updatedContent, function (err) {
        if (err) throw err;
    });
});