const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src/components/ui');
const destDir = path.join(__dirname, '../components/ui');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Get all files in src/components/ui
const files = fs.readdirSync(srcDir);

let copiedCount = 0;
let skippedCount = 0;

files.forEach((file) => {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, file);

  // Skip if file already exists or is one we already wrote
  if (fs.existsSync(destFile)) {
    skippedCount++;
    return;
  }

  try {
    const content = fs.readFileSync(srcFile, 'utf-8');
    fs.writeFileSync(destFile, content);
    copiedCount++;
    console.log(`✓ Copied: ${file}`);
  } catch (error) {
    console.error(`✗ Error copying ${file}: ${error.message}`);
  }
});

console.log(`\nCopy complete! Copied: ${copiedCount}, Skipped: ${skippedCount}`);
