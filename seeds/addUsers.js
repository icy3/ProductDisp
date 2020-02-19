var faker = require('faker');
const createFakeInfo = () => ({
  title: faker.commerce.productName(),
  images: faker.image.image(),
})
          exports.seed = async function(knex, Promise) {
            const desiredFakeUsers =10000;
            const numy = 1000
            for (let j =0; j < numy; j++) {
              const fakeUsers = [];
                for(let i = 0; i<desiredFakeUsers; i++) {
                fakeUsers.push(createFakeInfo());
              }
            }
              await knex("users")
              .insert(fakeUsers)
}