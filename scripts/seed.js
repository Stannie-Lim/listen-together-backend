'use strict'

const db = require('../src/server/db/db')
const {
    Room,
    User,
    Queue,
    Song,
} = require('../src/server/db/models');

async function seed() {
    await db.sync({force: true});
    const user1 = await User.create({ id: 'hello1' });
    const user2 = await User.create({ id: 'hello2' });
    const [ room1, room2 ] = await Promise.all([
        Room.create({ id: Math.random().toString(36).substring(7), adminId: user1.id }),
        Room.create({ id: Math.random().toString(36).substring(7), adminId: user1.id }),
        Room.create({ id: Math.random().toString(36).substring(7), adminId: user1.id }),
    ]);

    await Song.create({ name: 'Cut To The Feeling', artist: 'Carly Rae Jepsen', spotifyUri: 'spotify:track:6EJiVf7U0p1BBfs0qqeb1f', imageUri: 'https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1' });
    await Song.create({ name: 'Cut To The Feeling', artist: 'Carly Rae Jepsen', spotifyUri: 'spotify:track:6EJiVf7U0p1BBfs0qqeb1f', imageUri: 'https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1' });
    await Song.create({ name: 'Cut To The Feeling', artist: 'Carly Rae Jepsen', spotifyUri: 'spotify:track:6EJiVf7U0p1BBfs0qqeb1f', imageUri: 'https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1' });

    await Queue.create();

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