const express = require('express');
const utils = require('./utils');
const db = require('./db');
const router = express.Router();

router.get('/product',(request,response)=>{
 const statement = `select id,pname,price from product`;
 const connection = db.connect();
 connection.query(statement,(error,product)=>{
     connection.end();
     response.send(utils.createResponse(error,product));
 });
});

router.delete('/product/:id',(request,response)=>{
    const id1 = request.params.id;
    const statement = `delete from product where id=${id1}`;
    const connection = db.connect();
    connection.query(statement,(error,product)=>{
        connection.end();
        response.send(utils.createResponse(error,product));
    });
   });
   


   router.post('/product',(request,response)=>{
    const id2=request.body.id;
    const pname=request.body.pname;
    const price=request.body.price;
    const statement = `insert into product values(${id2},'${pname}',${price})`;
    const connection = db.connect();
    connection.query(statement,(error,product)=>{
        connection.end();
        response.send(utils.createResponse(error,product));
    });
   });


   

module.exports = router;
