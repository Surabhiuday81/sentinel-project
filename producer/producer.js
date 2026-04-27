const Redis = require('ioredis');
const redis = new Redis({ host: 'broker' });

setInterval(() => {
    const log = {
        timestamp: new Date(),
        level: Math.random() > 0.8 ? 'ERROR' : 'INFO',
        message: 'System heartbeat detected',
        service: 'auth-service'
    };
    redis.lpush('logs', JSON.stringify(log));
    console.log("Log sent to queue:", log.level);
}, 2000);