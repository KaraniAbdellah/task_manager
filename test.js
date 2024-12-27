const prompt = require('prompt-async');

async function getUserOperation() {
    await prompt.start(); // Start the prompt
    const { operation } = await prompt.get(['operation']); // Prompt user for input
    console.log(`You selected: ${operation}`);
}

getUserOperation();
