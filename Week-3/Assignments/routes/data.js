const express = require('express');
const router = express.Router();


router.get('/',(req, res) =>{
    const value = req.query.number;
    if (!value){
        res.send('Lack of Parameter');
    } else {
        const number = parseInt(value);
        if (Number.isNaN(number) || number < 0){
            res.send('Wrong Parameter');
        } else {
            const output = (((1+number)*number)/2).toString();
            res.send(output);
        }
    }
});

module.exports = router;