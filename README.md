# Password-Manager

<img src = "https://user-images.githubusercontent.com/60837980/115995406-aeea5f80-a5f8-11eb-9725-d8dc95dd62ee.png" height="400" width="900" />
Here my application name is LinkedIn and when I tap on LinkedIn then
<img src = "https://user-images.githubusercontent.com/60837980/115995847-85cace80-a5fa-11eb-9318-e3b9d3a93cde.png" height="300" width="800" />
my original password is shown using decryption technique 
<img src="https://user-images.githubusercontent.com/60837980/115995777-3be1e880-a5fa-11eb-845c-b0fa92ff1baf.png" width="800" height="250"/>


 This is application where one can store his passwords of any application. 
 ## Speciality of this application 
  It uses **AES CTR** mode encryption algorithm to hash the password and then store the password into the database . 
  If you want to see your original password then you need to tap on the application name for which you have saved the password .
 Then the password will be decrypted and shown to you on the screen . 
 
 ## Folder Structure 
      Client folder for frontend
      Server folder for backend
 ## Tech Stack used
 ##### Frontend --> React JS
 ##### Backend  -->  Node js , Express JS
 ##### Database --> MySQL  
 
 ## Prerequisite 
     1. Install React,Node,Express JS in your system . 
     2. Install MySQL workbench also . 
     3. Install Cors for connecting front-end and backend . 
  
 ## To start this application 
     1.  First clone this repository 
     2.  Then go to client folder and open with cmd and type 
          **npm start**
          frontend will start at localhost:3000
     3.  Now go to server folder and open with another command prompt window and type 
          **npm start**
          You will see a message : sever started at 3001
          
          You're good to go now . 
          
**EncryptionHandler.js** inside **server** folder **(server/EncryptionHandler.js)** is responsible for all Encryption and decryption stuffs . 

