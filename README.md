# Hotel Booking

## Prerequisits
PostgreSQL 11.7

Tested on:
```
λ node -v
v8.16.2
```
```
λ node -v
v12.11.1
```
## Installation
1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` and `.env` (copy one from `.env_example` and fill db user credentials)
3. Run `npm run typeorm migration:run`
4. Run `npm start` command
5. Import `Backup.postman_dump.json` into postman. Pick Environment and start sending requests