import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import registerRoutes from './Routes/register_routes' 

dotenv.config({ path: '../../config/.env' });

const app = express();
const route = express.Router();
const port = process.env.PORT || 9000;
const databaseURL = process.env.MONGO_DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(databaseURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    mongoose.connection.on('error', (err) => {
        console.error(err);
    });
};

// Call the connectDB function
connectDB();

// Optionally set these options for individual schemas

app.use(express.json());
app.use('/v1', route);
app.use("/register", registerRoutes)

app.listen(port, () => {
    console.log(`Listening on port ${port}. Here we go!`);
});
