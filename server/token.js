//login => takes the email from the req.body 
//search for user entry for this email
//match the password 
//assign a jwt token

import jwt from 'jsonwebtoken'

//requirement for token generation

//1.secret string = 'random string'
//2.payload => securely we can transfer data in the payload.
//3.expiry time.
//1st argument payload ={

// }
const token = jwt.sign({
    userId : '123',
    name : 'rish',
    role : "jobseeker"
},"hello-this-isSecret" ,{expiresIn : "7d"})


const decoded = jwt.verify(token ,'hello-this-isSecret') ;
console.log(decoded)
console.log(token)


//next task  is the create a middleware which checks the token available or not on the req.headers

