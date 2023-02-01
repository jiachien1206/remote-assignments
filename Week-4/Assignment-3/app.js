const express = require('express');
const app = express();
const { isUser, signUp, checkUser} = require('./database.js');
const cookieParser = require('cookie-parser');
app.use(express.urlencoded());
app.set('view engine', 'pug');
app.use(cookieParser());
app.use('/static', express.static('public'));

function asyncHandler(cb){
    return async(req, res, next) => {
        try {
            await cb(req, res, next);
        } catch(err){
            res.render('error', {error: err});
        }
    }
}

app.get('/', asyncHandler(async (req, res) => {
    res.render('home');
}));

app.post('/', asyncHandler(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const button = req.body.btn;
    if (!checkEmailFormat(email)){
        res.render('home',{text: 'Your email format is wrong. Please try again'});
    } else if (password.length < 6 && button === 'signup'){
        res.render('home',{text: 'Your password should be longer than 6 characters.'});
    } else{
        if (button === 'signin'){
            if (await checkUser(email, password)){
                res.cookie('email', email);
                res.redirect('/member');
            }else{
                res.render('home',{text: 'Your email or password is wrong. Please try again.'});
            }
        } else{
            if (await isUser(email)){
                res.render('home',{text: 'The email already exist. Please sign-in or use a new email.'});
            } else {
                await signUp(email, password);
                res.cookie('email', email);
                res.redirect('/member');
            }
        }
    }
}))

app.get('/member', asyncHandler(async (req, res) => {
    const email = req.cookies.email;
    res.render('member', {email});
}));

app.post('/member', asyncHandler(async (req, res) => {
    res.clearCookie('email');
    res.redirect('/');
}));

function checkEmailFormat(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

app.listen(3000, () => {
    console.log('This application is running on local host:3000.') // To show this string on terminal to tell what's happening
});