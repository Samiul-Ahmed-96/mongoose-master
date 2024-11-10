import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url);

    app.listen(config.port, () => {
      console.log(`Server Running ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
