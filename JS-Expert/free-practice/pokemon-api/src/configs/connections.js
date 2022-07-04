/**
 * Work in progress. API does not connect to MongoDB yet
 */

import { clusterUri } from './constants.js';
import { MongoClient, ServerApiVersion } from 'mongodb';

async function main() {
	const client = new MongoClient(clusterUri);
	try {
        console.log('Connecting to MongoDB...');
        await client.connect();
        console.log('Success!');
        await listDatabases(client);
	} catch (error) {
		throw new Error('Failed to connect to MongoClient: ' + error);
	} finally {
		await client.close();
	}
}

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main();
