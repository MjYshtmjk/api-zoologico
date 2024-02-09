import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';
import { Habitat } from './model/Habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';

import express from 'express';
import cors from 'cors';

const server = express();
const port = 8699;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave('Papagaio', 30, 'Masculino', 10);
    let reptil: Reptil = new Reptil('Lagarto', 2, 'Femea', 'Cicloides');
    let mamifero: Mamifero = new Mamifero('Doberman', 'Cachorro', 102, 'Femea');
    res.json([ave, reptil, mamifero]);
})

server.post('/ave', (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    let ave: Ave = new Ave(nome, idade, genero, envergadura);
    res.json(["Está é a nova ave do zoológico: ", ave]);
});

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})

server.post('/habitat', (req, res) => {
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado');
})

server.post('/atracao', (req, res) => {
    const { nome, animais } = req.body;
    const atracao = new Atracao(nome, animais);
    console.log(atracao);
    res.status(200).json('Atracao criado');
})

server.post('/zoologico', (req, res) => {
    const { nome, animais } = req.body;
    const zoologico = new Zoologico(nome, animais);
    console.log(zoologico);
    res.status(200).json('Zoologico criado');
})