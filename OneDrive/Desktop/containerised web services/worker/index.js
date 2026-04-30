const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/crud_db';

async function runWorker() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Worker connected to MongoDB');

    // Simulate some periodic background task
    setInterval(async () => {
      try {
        const count = await mongoose.connection.db.collection('items').countDocuments();
        console.log(`[Worker] Current number of items in DB: ${count}`);
      } catch (err) {
        console.error('[Worker] Error fetching count:', err.message);
      }
    }, 10000); // Check every 10 seconds
  } catch (error) {
    console.error('Worker failed to connect to MongoDB', error);
    process.exit(1);
  }
}

runWorker();
