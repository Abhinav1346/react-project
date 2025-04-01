import jwt from 'jsonwebtoken'

export const verifyToken = (req,res,next) => {
  console.log(req.headers)
if(req.headers.authorization){
 const auth = req.headers.authorization ;
 console.log(auth)
const token = auth.split(' ')[1]

const decoded = jwt.verify(token ,'hello-this-isSecret') ;
console.log(decoded)
next()
}else {
 console.log('no token found')
}}