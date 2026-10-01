import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy index.html
fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(distDir, 'index.html'));

// Copy js directory
const jsDir = path.join(__dirname, 'js');
const jsDistDir = path.join(distDir, 'js');
if (!fs.existsSync(jsDistDir)) {
  fs.mkdirSync(jsDistDir, { recursive: true });
}

if (fs.existsSync(jsDir)) {
  for (const file of fs.readdirSync(jsDir)) {
    fs.copyFileSync(path.join(jsDir, file), path.join(jsDistDir, file));
  }
}

console.log('Build completed successfully.');
