const express = require('express');

const sum = (req, res, next) => {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    res.render('result', { operation:'sum', n1, n2, result: n1+n2 });
}
const multiply = (req, res, next) => {
    const n1 = Number(req.body.n1);
    const n2 = Number(req.body.n2);
    res.render('result', { operation:'multiply', n1, n2, result: n1*n2 });
}
const divide = (req, res, next) => {
    const n1 = Number(req.body.n1);
    const n2 = Number(req.body.n2);
    res.render('result', { operation:'divide', n1, n2, result: n1/n2 });
}
const power = (req, res, next) => {
    console.log(req);
    const n1 = Number(req.body.n1);
    const n2 = Number(req.body.n2);
    res.render('result', { operation:'power', n1, n2, result: Math.pow(n1,n2) });
}
const substract = (req, res, next) => {
    console.log(substract);
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    res.render('result', { operation:'substract', n1, n2, result: n1-n2 });
}

module.exports = {sum, multiply, divide, power, substract};