import fs from 'fs';

const startTime = Date.now();

const stream = fs.createReadStream('ex4/index.html', { encoding: 'utf-8' });

stream.on('data', (chunk) => {
    console.log('Lendo parte do arquivo:');
    console.log(chunk);
});

stream.on('end', () => {
    const endTime = Date.now();
    console.log(`Tempo total: ${(endTime - startTime)}ms`);
    console.log('Leitura finalizada.');
});

stream.on('error', (err) => {
    console.error('Erro ao ler o arquivo:', err);
});