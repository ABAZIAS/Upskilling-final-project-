import mongoose from "mongoose";

let isConnected = false;

export const dbConnection = async () => {
    if (isConnected) {
        console.log("Reusing existing database connection");
        return;
    }

    try {
        const db = await mongoose.connect("mongodb+srv://abazagroup55_db_user:j2CbxCB74y8h_GC@cluster0.ip5vvzn.mongodb.net/finalproject");
        isConnected = db.connections.readyState === 1;
        console.log("el db btamenak we btslm 3aleek");
    } catch (error) {
        console.log("error:", error);
        throw error;
    }
};
