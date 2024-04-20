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
    const { n1, n2 } = data;
    // console.log("DEV -> ", req.method, req.query);
    switch (method) {
        case 'GET':
            res.redirect(`/results/${n1}/${n2}`);
            break;
        case 'POST':
            res.redirect(`/results/`,307);
            break;
        case 'PUT':
            console.log(operation,data);
            res.redirect(`/results/`,307);
            break;
        case 'PATCH':
            res.redirect(`/results/`,307);
            break;
        case 'DELETE':
            res.redirect(`/results/${n1}/${n2}`);
            break;
        default:
            res.send("error");
            break;
    }
}

module.exports = {myRedirect};