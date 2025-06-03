const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const { exec } = require('child_process');

const execAsync = promisify(exec);
const rmdir = promisify(fs.rm);
const nextDir = path.join(__dirname, '..', '.next');

async function cleanupDirectory() {
  try {
    console.log(`Attempting to remove ${nextDir}...`);
    
    // Try the standard removal approach first
    try {
      await rmdir(nextDir, { recursive: true, force: true });
      console.log('.next directory successfully removed');
      return;
    } catch (standardError) {
      console.log('Standard removal failed, trying alternative methods...');
    }

    if (process.platform === 'win32') {
      try {
        const deleteCommand = `rd /s /q "${nextDir}"`;
        await execAsync(deleteCommand);
        console.log('.next directory forcefully removed using Windows commands');
      } catch (winError) {
        console.log('Windows command removal also failed, .next directory might be in use by another process');
        console.log('Continuing anyway...');
      }
    } else {
      try {
        await execAsync(`rm -rf "${nextDir}"`);
        console.log('.next directory removed using rm command');
      } catch (unixError) {
        console.log('Unix command removal also failed');
        console.log('Continuing anyway...');
      }
    }
  } catch (e) {
    console.log('No .next directory to remove or permission issue encountered');
    console.log('Continuing anyway...');
  }
}

cleanupDirectory(); 