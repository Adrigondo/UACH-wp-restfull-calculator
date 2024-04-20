const express = require('express');

const myRedirect = (req, res, next) => {
    // console.log("HELP");
    // res.send('HOLA');
    const method = req.method;
    const data = {
        ...req.body,
        ...req.params,
        ...req.query,
    };
    const { n1, n2, operation } = data;
    console.log("DEV -> ", n1,n2,operation, method);
    switch (method) {
        case 'GET':
            res.redirect(`/results/${n1}/${n2}`);
            break;
        case 'POST':
            res.redirect(`/results/`,307);
            break;
        case 'PUT':
            res.redirect(`/results/`,307);
            break;
        case 'PATCH':
            console.log("DEV->",operation,data);
            res.redirect(`/results/`,307);
            break;
        case 'DELETE':
            res.redirect(`/results/${n1}/${n2}`);
            break;
        default:
            res.status(404).send({error:"A"});
            break;
    }
}

module.exports = {myRedirect};