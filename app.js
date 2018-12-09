const express = require('express');
const lC = require('./listCommunication');
const app = express();
app.get('/', (req, res) => {
    res.send('hello world');
});
app.get('/api/customer/:id', (req, res) => {
    lC.GetCustomer(req.params.id).then((data)=>{
        res.send(data);
    },(err)=>{
        res.send(err);
    });
});
app.get('/api/customer/', (req, res) => {
    lC.GetCustomer().then((data)=>{
        res.send(data);
    },(err)=>{
        res.send(err);
    });
});
app.listen(3000, () => {
    console.log('server is running');
});