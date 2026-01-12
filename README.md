# syncLyftProj

To run this file first you have to initialize dependencies using:  npm init

then install some npm dependencies like framework, hashing, JWT auth for authentication, than input validation using 
npm install express bcryptjs jsonwebtoken express-validator

than open two terminal on same path you server.js or your complete file stored
run `node server.js` on one terminal than without closing terminl go to another terminal and run 
`curl -X POST http://localhost:3000/api/register \
-H "Content-Type: application/json" \
-d '{
  "name": "Manish",
  "email": "thisisatest@test.com",
  "password": "password123"
}
`
this is for user registration than login using 
`curl -X POST http://localhost:3000/api/login \
-H "Content-Type: application/json" \
-d '{
  "email": "thisisatest@test.com",
  "password": "password123"
}'
`

by login you will get a access token for every user you have to next run 
`curl http://localhost:3000/api/profile \
-H "Authorization: Bearer YOUR_TOKEN_HERE"`

you will get your profile related to token 

than create user using 
`curl -X POST http://localhost:3000/api/order \
-H "Authorization: Bearer YOUR_TOKEN_HERE" \
-H "Content-Type: application/json" \
-d '{
  "product_name": "Laptop",
  "quantity": 2
}'
`
  for see orders 
  `curl http://localhost:3000/api/orders \
-H "Authorization: Bearer YOUR_TOKEN_HERE"
`


