import { createClient } from 'redis';

const redisConnection = createClient({
    username: 'default',
    password: 'MGDCENRxgxMJR0jbes2kkEG9kxPBllKw',
    socket: {
        host: 'redis-15391.c251.east-us-mz.azure.redns.redis-cloud.com',
        port: 15391
    }
});

redisConnection.on('error', err => console.log('Redis Client Error', err));
redisConnection.connect()

export default redisConnection