const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3002, ()=>{
    console.log('Servidor funcionando en el purto 3001');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});