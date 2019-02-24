const express = require('express');
const bodyParser = require('body-parser');
const lC = require('./listCommunication');
const app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.get('/', (req, res) => {
    res.send('hello world');
});
app.get('/api/customer/:id', (req, res) => {
    lC.GetCustomer(req.params.id).then((data) => {
        res.send(data);
    }, (err) => {
        res.send(err);
    });
});
app.get('/api/customer/', (req, res) => {
    lC.GetCustomer().then((data) => {
        res.send(data);
    }, (err) => {
        res.send(err);
    });
});

app.post('/api/customer',(req,res)=>{
    // res.send(req.body);
    lC.CreateCustomer(req.body).then((data)=>{
        res.send(data);
    },(err)=>{
        res.send(err);
    });
});
app.listen(3000, () => {
    console.log('server is running');
});