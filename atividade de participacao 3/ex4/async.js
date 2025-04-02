import fs from 'fs/promises';

const startTime = Date.now();

async function readHtmlAsync() {
    try {
        const data = await fs.readFile('ex4/index.html', 'utf-8');
        console.log(data);
        
        const endTime = Date.now();
        console.log(`Tempo total: ${(endTime - startTime)}ms`);
    } catch (err) {
        console.error('Erro ao ler o arquivo:', err);
    }
}

readHtmlAsync();