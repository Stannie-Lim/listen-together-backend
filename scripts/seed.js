'use strict'

const db = require('../src/server/db/db')
const {
    Room
} = require('../src/server/db/models');

async function seed() {
    console.log(Room, 'hello');
    await db.sync({force: true});
    console.log('seeded');
};

async function runSeed() {
    console.log('seeding...')
    try {
        await seed()
    } catch (err) {
        console.error(err)
        process.exitCode = 1
    } finally {
        console.log('closing db connection')
        await db.close()
        console.log('db connection closed')
    }
}

if (module === require.main) {
    runSeed()
}