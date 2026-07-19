import { execSync } from 'node:child_process';
import { cpSync, existsSync, readdirSync, rmSync } from 'node:fs';
import path from 'node:path';

const repoRoot = process.cwd();
const targetBranch = 'gh-pages';
const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', {
  cwd: repoRoot,
  encoding: 'utf8',
}).trim();

function run(command, options = {}) {
  execSync(command, {
    cwd: repoRoot,
    stdio: 'inherit',
    ...options,
  });
}

function ensureCleanWorkingTree() {
  const status = execSync('git status --short', {
    cwd: repoRoot,
    encoding: 'utf8',
  }).trim();

  if (status) {
    console.error('Working tree is not clean. Commit or stash changes before deploying.');
    process.exit(1);
  }
}

function cleanBranchRoot() {
  const entries = readdirSync(repoRoot, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.git') continue;
    rmSync(path.join(repoRoot, entry.name), {
      recursive: true,
      force: true,
    });
  }
}

function publishBuild() {
  const distDir = path.join(repoRoot, 'dist');
  if (!existsSync(distDir)) {
    throw new Error('Build output directory dist/ was not found. Run npm run build first.');
  }

  const entries = readdirSync(distDir);
  for (const entry of entries) {
    const source = path.join(distDir, entry);
    const target = path.join(repoRoot, entry);
    cpSync(source, target, { recursive: true, force: true });
  }
}

try {
  ensureCleanWorkingTree();
  run('npm run build');
  run('node ./scripts/write-cname.js');

  run(`git checkout ${targetBranch}`);
  cleanBranchRoot();
  publishBuild();

  try {
    run('git add .');
    run('git commit -m "Publish latest build to gh-pages"');
  } catch {
    console.log('No changes to commit; skipping commit.');
  }

  run(`git push origin ${targetBranch}`);
  run(`git checkout ${currentBranch}`);

  console.log(`Deployment completed successfully from ${currentBranch} to ${targetBranch}.`);
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}
