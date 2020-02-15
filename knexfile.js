module.exports = {
    development: {
        client: "postgresql",
        connection: `postgres://localhost:5432/${product_display}`,
        migrations: {
            directory: __dirname + "/migrations"
        },
        seeds: {
            directory: __dirname + "/seeds"
        }
    }
}