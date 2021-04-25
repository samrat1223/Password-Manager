const express = require('express');
const app = express()
//creating a database connection
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3001

//Fetching EncryptionHandler function and encrypt,decrypt
const {encrypt,decrypt} = require('./EncryptionHandler');

//Using cors to bridge b/w front and backend
app.use(cors());
app.use(express.json());
//db variable is used to make query to our database
const db = mysql.createConnection({
    host:  'localhost',
    user: 'root',
    password: 'password',
    database:'passwordmanager',
});

//Adding a password to the database using POST
app.post("/addpassword",(req,res) =>{
    //Accesing inputs from the frontend to store to the db
    const {password,title} = req.body;

    //Before inserting the password to the Database we are encrypting the password
    const hashedPassword = encrypt(password);

    //Inserting into the db
    db.query("INSERT INTO passwords (password,title,iv) VALUES (?,?,?)",
    [hashedPassword.password,title,hashedPassword.iv],
    (err,result) => {
        if(err){
            console.log(err);
        }
        else
        {
            res.send('Success');
        }
    });
});


//Fetching the passwords to show in our frontend
app.get('/showpasswords',(req,res) => {
    db.query('SELECT * FROM passwords;',(err,result) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    });
});

app.post('/decryptpassword',(req,res)=>{
    res.send(decrypt(req.body))
})

app.listen(PORT,()=>{
    console.log('Server started at 3001');
})