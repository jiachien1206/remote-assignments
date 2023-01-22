const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    const myName = req.cookies.name;
    if (!myName){
        res.render('askName');
    } else {
        res.render('showName', {myName});
    }
});

router.post('/',(req,res) => {
    res.redirect('/trackName?name='+req.body.name);
});

module.exports = router;