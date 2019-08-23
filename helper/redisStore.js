const session = require('express-session');
const redisStore = require('connect-redis')(session);
// redisStore u kullanma sebebim session işlemlerini
// farklı server larda girsek bile bilgi kaybı yaşamamak için
// redis server ı kullnadım.

module.exports = new redisStore({
    host: process.env.REDIS_URI,
    port: process.env.REDIS_PORT,
    pass: process.env.REDIS_PASS
});
