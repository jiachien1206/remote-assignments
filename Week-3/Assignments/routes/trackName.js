const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.cookie('name', req.query.name);
    res.redirect('/myName');
})

module.exports = router;