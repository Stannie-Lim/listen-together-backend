'use strict'

const db = require('../src/server/db/db')
const {
    Room,
    User
} = require('../src/server/db/models');

async function seed() {
    await db.sync({force: true});
    const user1 = await User.create({ id: 'hello' });
    const [ room1, room2 ] = await Promise.all([
        Room.create({ roomCode: Math.random().toString(36).substring(7), adminId: user1.id }),
        Room.create({ roomCode: Math.random().toString(36).substring(7), adminId: user1.id }),
        Room.create({ roomCode: Math.random().toString(36).substring(7), adminId: user1.id }),
    ]);
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