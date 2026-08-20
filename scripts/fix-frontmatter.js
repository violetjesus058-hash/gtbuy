/**
 * Fix files that start with --- but have no closing ---
 * Remove the leading --- line from these files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.resolve(__dirname, '..', 'blog');

const brokenFiles = [
  'gtbuy-consolidation-guide.md',
  'gtbuy-dashboard-guide.md',
  'gtbuy-delivery-guide.md',
  'gtbuy-first-order.md',
  'gtbuy-getting-started.md',
  'gtbuy-how-to-buy.md',
  'gtbuy-how-to-order.md',
  'gtbuy-new-user-guide.md',
  'gtbuy-order-guide.md',
  'gtbuy-ordering-process.md',
  'gtbuy-payment-guide.md',
  'gtbuy-platform-guide.md',
  'gtbuy-purchase-guide.md',
  'gtbuy-registration-guide.md',
  'gtbuy-shipping-methods.md',
  'gtbuy-shipping-options.md',
  'gtbuy-shopping-guide.md',
  'gtbuy-top-up-guide.md',
  'gtbuy-warehouse-guide.md',
];

let fixed = 0;
for (const file of brokenFiles) {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove leading ---\n
  if (content.startsWith('---\n')) {
    content = content.substring(4); // remove '---\n'
    fs.writeFileSync(filePath, content, 'utf-8');
    fixed++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`\nFixed ${fixed} files`);
