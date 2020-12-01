const { Router } = require('express');
const router = Router();
const CurriculoControle = require('../controllers/curriculo-controller');

router.get('/', (req, res) => {
    res.render('index', {
        title: "Meu currículo",
        apresentacao: "Olá, se você chegou até aqui é porque quer conhecer o meu currículo. Clica aí no botão para saber mais!"
    });
});

router.get('/curriculo', (req, res) => {
    const dataCurriculo = CurriculoControle.getData();
    res.render('curriculo', dataCurriculo);
});

module.exports = router;