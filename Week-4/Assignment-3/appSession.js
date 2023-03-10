const express = require('express');
const app = express();
const { isUser, signUp, checkUser, pool} = require('./databaseSession.js');
const cookieParser = require('cookie-parser');
const session = require('express-session');                     // session middleware
const MySQLStore = require('express-mysql-session')(session);   // express-mysql-session
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.use(cookieParser());
app.use('/static', express.static('public'));

// session setup
const sessionStore = new MySQLStore({}, pool);
app.use(
    session({
        key: 'sessionID',
        secret: process.env.MYSQL_SECRET,
        resave: false,
        saveUninitialized: false,
        store: sessionStore
    })
);

function asyncHandler(cb){
    return async(req, res, next) => {
        try {
            await cb(req, res, next);
        } catch(err){
            console.log(err)
            res.render('error', {error: err});
        }
    }
}

app.get('/', asyncHandler(async (req, res) => {
    if (req.session.isLoggedIn){    // Check loggedin
        res.redirect('/member');
    } else{
        res.render('home');
    }
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
                req.session.isLoggedIn = true;  // set loggedin
                req.session.user = email;       // save email in session
                res.redirect('/member');
            }else{
                res.render('home',{text: 'Your email or password is wrong. Please try again.'});
            }
        } else{
            if (await isUser(email)){
                res.render('home',{text: 'The email already exist. Please sign-in or use a new email.'});
            } else {
                await signUp(email, password);
                req.session.isLoggedIn = true;  // set loggedin
                req.session.user = email;       // save email in session
                res.redirect('/member');
            }
        }
    }
}));

app.get('/member', asyncHandler(async (req, res) => {
    const email = req.session.user;     // get email from session
    res.render('member', {email});
}));

app.post('/member', asyncHandler(async (req, res) => {
    req.session.destroy();              // delete session
    res.clearCookie('sessionID');       // clear cookie
    res.redirect('/');
}));


function checkEmailFormat(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

app.listen(3000, () => {
    console.log('This application is running on local host:3000.'); // To show this string on terminal to tell what's happening
});