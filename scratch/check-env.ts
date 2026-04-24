import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
console.log("TURSO_DATABASE_URL:", process.env.TURSO_DATABASE_URL ? "SET" : "NOT SET");
console.log("TURSO_AUTH_TOKEN:", process.env.TURSO_AUTH_TOKEN ? "SET" : "NOT SET");
