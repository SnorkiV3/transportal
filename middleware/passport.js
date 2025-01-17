const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    User = require('../models/User')

const config = require('../config/config')
const opts = {}

// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = config.jwtSecret;

// console.log(opts)

module.exports = new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: config.jwtSecret
}, (token, done) => {
    return done(null, token);
})