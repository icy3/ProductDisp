module.exports = {
    development: {
        client: "postgresql",
        connection: 'postgres://postgres:student@localhost:5432/postgres',
        migrations: {
            directory: __dirname + "/migrations"
        },
        seeds: {
            directory: __dirname + "/seeds"
        }
    }
}
//require('knex')({
    // client: 'pg',
    // connection: 
//   })