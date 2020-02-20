exports.up = async function(knex, Promise) {
    await knex.schema.createTable("users", table => {
        // table
        //     .increments("user_id")
        //     .unsigned()
        //     .primary();
        // table
        //     .string("email")
        //     .unique()
        //     .notNullable();
        table.string("title").notNullable();
        table.string("images").notNullable();
    });
};

exports.down = async function(knex, Promise) {
    await knex.schema.dropTable("users");
};