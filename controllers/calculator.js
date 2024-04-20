
const sum = (req, res, next) => {
    const n1 = req.params.n1;
    const n2 = req.params.n2;
    res.render('index', { title: 'Express' });
}
const multiply = (req, res, next) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
    res.render('index', { title: 'Express' });
}
const divide = (req, res, next) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
    res.render('index', { title: 'Express' });
}
const power=(req, res, next)=>{
    const n1 = req.body.n1;
    const n2 = req.body.n2;
    res.render('index', { title: 'Express' });
}
const substract=(req, res, next)=>{
    const n1 = req.params.n1;
    const n2 = req.params.n2;
    res.render('index', { title: 'Express' });
});
