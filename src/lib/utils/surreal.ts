import { Surreal } from 'surrealdb.js';

const db = new Surreal();

try {
        // Connect to the database
        await db.connect('http://127.0.0.1:8000/rpc', {
            // Set the namespace and database for the connection
            namespace: 'test',
            database: 'test',

            // Set the authentication details for the connection
            auth: {
                namespace: 'test',
                database: 'test',
                // scope: 'user',
                username: 'root',
                password: 'root',
            },
        });
} catch (error) {
    console.error('[surreal.ts]', error);
};

export default db;