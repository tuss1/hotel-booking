module.exports = {
   "type": "postgres",
   "host": "localhost",
   "port": 5432,
   "username": process.env.PG_USER,
   "password": process.env.PG_PASSWORD,
   "database": "postgres",
   "synchronize": false,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
};
