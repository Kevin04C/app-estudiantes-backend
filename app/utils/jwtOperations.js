const { request } = require('express')
const jwt = require('jsonwebtoken')

const signToken = (userToken) => {
  return jwt.sign(userToken,
    process.env.JWT_SECRET_KEY,
    { expiresIn: '12h' }
  )
}

const verifyToken = (request = request) => {
  const authorization = request.headers.authorization?.toLowerCase().startsWith('bearer ')

  let token = authorization ? request.headers.authorization?.split(' ')[1] : null
  
  if(!token) {
    if(request.query.token) {
      token = request.query.token;
    }
  }

  const payload = validateToken(token)
  request.userName = payload.name
  request.userId = payload.id
}

const validateToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY)
}

module.exports = { signToken, verifyToken }
