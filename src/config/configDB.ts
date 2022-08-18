import dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_DB_USER;
const MONGO_PASSWORD = process.env.MONGO_DB_PASSWORD;
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.vqez2l9.mongodb.net/?retryWrites=true&w=majority`;

/** Configuration of mongodb  */
export const config = {
    mongo: {
        url: MONGO_URL,
    },
};
