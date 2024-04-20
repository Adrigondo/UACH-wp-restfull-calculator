const express = require('express');

const index = (req, res, next) => {
    res.render('operation',{});
}
module.exports = {index};