import fs from 'fs';
import readline from 'readline';

const arquivo = process.argv[2];
const stream = fs.createReadStream(arquivo);
const rl = readline.createInterface({ input: stream });

rl.on('line', (linha) => {
    console.log(linha);
});

rl.on('close', () => {
    console.log("Leitura concluída.");
});