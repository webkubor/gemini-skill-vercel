const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(command) {
    try {
        return execSync(command, { stdio: 'inherit' });
    } catch (e) {
        return null;
    }
}

console.log('🚀 Starting Vercel Deployment Workflow...');

// 1. Check if Vercel is logged in
const user = run('npx vercel whoami');
if (user === null) {
    console.log('❌ Not logged in to Vercel. Please run: npx vercel login');
    process.exit(1);
}

// 2. Check if project is linked
const isLinked = fs.existsSync(path.join(process.cwd(), '.vercel'));
if (!isLinked) {
    console.log('📦 Project not linked. Initializing link...');
    run('npx vercel link --yes');
}

// 3. Deployment
console.log('🛠 Deploying to Vercel (Production)...');
run('npx vercel --prod --yes');

// 4. Git Sync
if (fs.existsSync(path.join(process.cwd(), '.git'))) {
    console.log('📝 Syncing with Git...');
    // We check for changes first to avoid empty commit errors
    const status = execSync('git status --porcelain').toString();
    if (status) {
        run('git add . && git commit -m "chore: deploy to vercel" && git push');
    } else {
        console.log('ℹ️ No git changes to push.');
    }
}

console.log('✅ Workflow complete!');
