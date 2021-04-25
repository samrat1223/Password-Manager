// This JS file is used to write Encrypt and decrypt functions and then importing them to index.js

//This module comes with nodejs and importing it
const crypto = require('crypto');

//Creating a secret varialbe which will keep my encryption safe and 
//according to the algorithm we need to write p 32 times
const secret ='pppppppppppppppppppppppppppppppp';


//Function to return a encrypted password
const encrypt = (password) => {

    //Indentifier iv to my encryption which will create identifier with 16 random bytes
    const iv = Buffer.from(crypto.randomBytes(16));

    //Here in this cipher variable all the encryption happens
    /*This createCipheriv() takes three arguments 
    1. first one is the algorithm (any one from crypto-module documentation)
    2. Turning our secret to a buffer
    3. Last one is iv
    */
    const cipher = crypto.createCipheriv('aes-256-ctr',Buffer.from(secret),iv);
    

    //encryptedPassword is the result of the encryption and holding the hash value
    const encryptedPassword = Buffer.concat([cipher.update(password),cipher.final(),
    ]);

    //Now our encryptedPassword is a buffer and we need to convert it to a string and it will be a hex encoding
    /*Then we will be returning a object which will contain iv and password both , if we only 
    pass the encrypted password then it will be very insecure .
    */
   //iv is also a buffer , so converting it to string
    return {iv: iv.toString("hex") , password: encryptedPassword.toString("hex")}
};


//Function to decrypt password
const decrypt = (encryption) => {
    const decipher = crypto.createDecipheriv(
        'aes-256-ctr',
        Buffer.from(secret),
        Buffer.from(encryption.iv,"hex")
    );

    const decryptedPassword = Buffer.concat([
        decipher.update(Buffer.from(encryption.password,"hex")),
        decipher.final(),
    ]);

    return decryptedPassword.toString();
}

module.exports = {encrypt,decrypt};