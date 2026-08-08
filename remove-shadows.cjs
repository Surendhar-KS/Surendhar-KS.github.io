const fs = require('fs');

const files = [
  'src/imports/Body/index.tsx',
  'src/imports/390WDefault/index.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Specific drop shadows to remove
  const shadowsToRemove = [
    'drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]',
    'drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]'
  ];

  shadowsToRemove.forEach(shadow => {
    // Replace the shadow string + optional trailing space
    const regex = new RegExp(shadow.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*', 'g');
    if (regex.test(content)) {
      content = content.replace(regex, '');
      changed = true;
      console.log(`Removed ${shadow} from ${file}`);
    }
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
  }
});
