const express = require('express');
const app = express();
const porta = 3000;
const mulheres = require('./mulheres.json')

app.listen(porta, function(){
    console.log('servidor rodando');
});

app.get('/mulheres', (req,res)=>{
    res.json(mulheres);
});

app.get('/mulheres/:id',(req,res)=>{
    const {id} = req.params;
    const mulher = mulheres.find(mulher => mulher.id == id);
    if(!mulher){
        return res.status(204).json();
    }
        res.json(mulher);
});