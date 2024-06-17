import mongoose from 'mongoose';

/* 
    0 - disconnected
    1 - connected
    2 - connecting
    3 - disconnecting
    4 - uninitialized
*/
const mongoConnection = {
    isConnected: 0,
};
const mongoUrl = "mongodb://localhost:27017/mongo?authSource=admin"

export const connect = async () => {
    console.log('MONGO_URL', mongoUrl);
    if (mongoConnection.isConnected === 1) {
        console.log('we were already connected');
        return;
    }

    if (mongoose.connections.length > 0) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;
        if (mongoConnection.isConnected === 1) {
            console.log('using existing connection');
            return;
        }

        await mongoose.disconnect();
    }
    await mongoose.connect(mongoUrl ?? '', {
        dbName: 'mongo',
    });
    mongoConnection.isConnected = 1;
    console.log('connected to mongodb', mongoUrl ?? '');
};

export const disconnect = async () => {
    if (process.env.NODE_ENV === 'development') return;
    if (mongoConnection.isConnected === 0) return;

    await mongoose.disconnect();
    mongoConnection.isConnected = 0;
    console.log('disconnected from mongodb');
};
