const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

async function isUser(email){
    const result = await pool.query('SELECT email FROM user WHERE email=?',[email]);
    if (result[0].length === 0){
        return false; // New User
    } else{
        return true ; // Already a user
    }
}

async function signUp(email, password){
    await pool.query(`
    INSERT INTO user (email, password)
    VALUES (?, SHA2(?, 224))
    `, [email, password]);
}

async function checkUser(email, password){
    const result = await pool.query('SELECT email FROM user WHERE email=? AND password=SHA2(?, 224)',[email, password]);
    if (result[0].length === 0){
        return false; // New User
    } else{
        return true;  // Already a user
    }
}

module.exports = {isUser, signUp, checkUser};