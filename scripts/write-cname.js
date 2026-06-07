import { writeFileSync } from 'fs';
import { join } from 'path';

const domain = 'christomanos.co.uk';
const dest = join(process.cwd(), 'dist', 'CNAME');

try {
  writeFileSync(dest, domain + '\n', 'utf8');
  console.log(`Wrote CNAME to ${dest}`);
} catch (err) {
  console.error('Failed to write CNAME file:', err);
  process.exit(1);
}
